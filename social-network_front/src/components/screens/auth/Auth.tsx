interface AuthProps {
  type: 'login' | 'register';
}

export default function Auth({ type }: AuthProps) {
  return <div className='p-layout'>Auth</div>;
}
