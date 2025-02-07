import { FC, ReactNode } from "react";

interface ProfileLayoutProps {
  children: Readonly<ReactNode>;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <>
      <h1>/app/profile/layout.tsx</h1>
      {children}
    </>
  );
};

export default ProfileLayout;
