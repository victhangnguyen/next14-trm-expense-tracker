import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();
  console.log("checkUser.ts->user: ", user, "\n");
  

  //! Check for current logged in clerk user
  if (!user) {
    return null;
  }

  //! Check if user exists in database
  const userExists = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  //! If user exists, return user
  if (userExists) {
    return userExists;
  }

  //! If user does not exist, create a new user

  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
