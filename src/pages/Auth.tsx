import { toast } from "sonner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "@telegram-auth/react";
import { GoogleLogin } from '@react-oauth/google';
import API from "@/lib/api";
import { useAuth } from "@/contexts/AuthProvider";

const Auth = () => {
  const navigate = useNavigate();
  const { user, refresh } = useAuth();

  const telegramAuth = (credential) => {
    API.post('/auth/telegram', credential).then((res) => {
      refresh();
      toast.success('Welcome back!');
    }).catch(err => toast.error(err.message));
  }

  const googleAuth = (credential) => {
    API.post('/auth/google', credential).then((res) => {
      refresh();
      toast.success('Welcome back!');
    }).catch(err => toast.error(err.message));
  }

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 flex-1 flex justify-center items-center">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4">
        <GoogleLogin
          theme="filled_blue"
          size="large"
          onSuccess={googleAuth}
          onError={() => toast.error('Login Failed')}
        />
        <LoginButton
          botUsername={import.meta.env.VITE_BOT_USERNAME}
          onAuthCallback={telegramAuth}
          buttonSize="large"
          cornerRadius={5}
          showAvatar={false}
          lang="en"
        />
      </div>
    </section>
  )
}

export default Auth;