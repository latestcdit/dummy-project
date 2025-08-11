import { GetServerSideProps } from 'next';
import { createServerClient } from '@supabase/ssr';
import { supabase } from '@/utils/supabase/client'; // Assuming this is the client-side supabase instance
import { AdminTable } from '@/components/admin/AdminTable';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface AdminPageProps {
  isAdmin: boolean;
}

export default function AdminPage({ isAdmin }: AdminPageProps) {
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p>You do not have administrative privileges to view this page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <p className="mb-8">Welcome, Admin! Here you can manage jobs, companies, and other data.</p>

      <Tabs defaultValue="jobs" className="w-full">
        <TabsList>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="lookup-data">Lookup Data</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <h2 className="text-2xl font-bold mt-4 mb-4">Manage Jobs</h2>
          {/* Job management UI will go here */}
        </TabsContent>

        <TabsContent value="companies">
          <h2 className="text-2xl font-bold mt-4 mb-4">Manage Companies</h2>
          {/* Company management UI will go here */}
        </TabsContent>

        <TabsContent value="lookup-data">
          <h2 className="text-2xl font-bold mt-4 mb-4">Manage Lookup Data</h2>
          <AdminTable
            tableName="commitment_types"
            columns={[
              { key: 'id', header: 'ID' },
              { key: 'name', header: 'Name' },
            ]}
          />
          {/* Other AdminTable instances for other lookup tables will go here */}
        </TabsContent>

        <TabsContent value="users">
          <h2 className="text-2xl font-bold mt-4 mb-4">Manage Users</h2>
          {/* User management UI will go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const supabaseServerClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies[name];
        },
        set(name: string, value: string, options: any) {
          res.setHeader('Set-Cookie', `${name}=${value}; Path=/; ${options.maxAge ? `Max-Age=${options.maxAge};` : ''} ${options.expires ? `Expires=${options.expires.toUTCString()};` : ''} ${options.domain ? `Domain=${options.domain};` : ''} ${options.path ? `Path=${options.path};` : ''} ${options.secure ? 'Secure;' : ''} ${options.httpOnly ? 'HttpOnly;' : ''} ${options.sameSite ? `SameSite=${options.sameSite};` : ''}`);
        },
        remove(name: string, options: any) {
          res.setHeader('Set-Cookie', `${name}=; Path=/; Max-Age=0; ${options.expires ? `Expires=${options.expires.toUTCString()};` : ''} ${options.domain ? `Domain=${options.domain};` : ''} ${options.path ? `Path=${options.path};` : ''} ${options.secure ? 'Secure;' : ''} ${options.httpOnly ? 'HttpOnly;' : ''} ${options.sameSite ? `SameSite=${options.sameSite};` : ''}`);
        },
      },
    }
  );

  const { data: { user } } = await supabaseServerClient.auth.getUser();

  let isAdmin = false;
  if (user) {
    // Fetch the user's role from the 'users' table
    const { data: userData, error: userError } = await supabaseServerClient
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (userError) {
      console.error('Error fetching user role:', userError);
    } else if (userData && userData.role === 'admin') {
      isAdmin = true;
    }
  }

  if (!isAdmin) {
    return {
      redirect: {
        destination: '/', // Redirect to home page if not admin
        permanent: false,
      },
    };
  }

  return {
    props: {
      isAdmin,
    },
  };
};
