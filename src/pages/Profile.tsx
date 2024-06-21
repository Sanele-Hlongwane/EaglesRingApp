// pages/profile.tsx

import { UserProfile } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

const ProfilePage = () => {
  return (
    <div>
      <SignedIn>
        <UserProfile />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
};

export default ProfilePage;
