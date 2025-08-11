import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/utils/supabase/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error logging in:", error);
      // TODO: Display user-friendly error message
    } else {
      // Fetch user details to check role
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user after login:", userError);
        router.push("/"); // Fallback to home
        return;
      }

      if (user) {
        const { data: userData, error: roleError } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();

        if (roleError) {
          console.error("Error fetching user role after login:", roleError);
          router.push("/"); // Fallback to home
          return;
        }

        if (userData && userData.role === 'admin') {
          router.push("/admin"); // Redirect to admin page
        } else {
          router.push("/"); // Redirect to home page for non-admins
        }
      } else {
        router.push("/"); // Fallback if user is null
      }
    }
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("Error signing up:", error);
      // TODO: Display user-friendly error message
    } else {
      // Fetch user details to check role
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user after signup:", userError);
        router.push("/"); // Fallback to home
        return;
      }

      if (user) {
        const { data: userData, error: roleError } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();

        if (roleError) {
          console.error("Error fetching user role after signup:", roleError);
          router.push("/"); // Fallback to home
          return;
        }

        if (userData && userData.role === 'admin') {
          router.push("/admin"); // Redirect to admin page
        } else {
          router.push("/"); // Redirect to home page for non-admins
        }
      } else {
        router.push("/"); // Fallback if user is null
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-4 border rounded-lg">
        <h1 className="text-2xl font-bold text-center">Welcome to IRN Cave</h1>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-col space-y-2">
          <Button onClick={handleLogin}>Continue</Button>
          <Button variant="outline" onClick={handleSignup}>Sign Up</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
