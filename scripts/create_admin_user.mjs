import { createClient } from '@supabase/supabase-js';

// Supabase credentials (from seed.mjs)
const SUPABASE_URL = 'https://hbzldpmtezrahlpksdsp.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiemxkcG10ZXpyYWhscGtzZHNwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDgxNjA3NSwiZXhwIjoyMDcwMzkyMDc1fQ.gX6_-i57RtJQKyhhudVJvJeIDgS96IxG6q-oDjEYmoQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function createAdminUser() {
  const email = 'sonic00040@yahoo.com';
  const password = 'sonic00040@yahoo.com';

  console.log(`Attempting to create admin user: ${email}`);

  try {
    // Create user in Supabase Auth
    const { data: userResponse, error: userError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Automatically confirm email for admin user
    });

    if (userError) {
      console.error('Error creating user in Supabase Auth:', userError);
      return;
    }

    const newUser = userResponse.user;
    console.log('User created in Supabase Auth:', newUser.id);

    // Insert user into public.users table with 'admin' role
    const { data: publicUser, error: publicUserError } = await supabase
      .from('users')
      .insert([
        {
          id: newUser.id,
          email: newUser.email,
          role: 'admin',
        },
      ])
      .select();

    if (publicUserError) {
      console.error('Error inserting user into public.users table:', publicUserError);
      // Optionally, delete the user from auth.users if public.users insertion fails
      await supabase.auth.admin.deleteUser(newUser.id);
      return;
    }

    console.log('Admin user created successfully in public.users:', publicUser);
    console.log(`You can now log in with email: ${email} and password: ${password}`);

  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
}

createAdminUser();
