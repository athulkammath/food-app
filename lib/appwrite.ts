
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export interface CreateUserParams {
    email: string;
    password: string;
    name: string;
}

export interface SignInParams {
    email: string;
    password: string;
}

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.aritha.foodapp",
    projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseID: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    userCollectionID: process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION,
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectID!)
    .setPlatform(appwriteConfig.platform!);


export const account = new Account(client);
export const databases = new Databases(client);
export const avatar = new Avatars(client);

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        )

        if (!newAccount) {
            throw new Error("Failed to create user");
        }

        await signIn({ email, password });

        const avatarUrl = avatar.getInitialsURL(name);

        return await databases.createDocument({
            databaseId: appwriteConfig.databaseID!,
            collectionId: appwriteConfig.userCollectionID!,
            documentId: ID.unique(),
            data: {
                email,
                name,
            }
        })
        // return newUser;

    } catch (e: any) {
        console.error("Appwrite Error:", e);
        throw new Error(e.message || e);
    }
}


export const signIn = async ({ email, password }: SignInParams) => {
    try {

        try {
            await account.deleteSession("current");
        } catch {

        }

        const session = await account.createEmailPasswordSession(
            email,
            password
        );

        return session;
    } catch (error: any) {
        throw new Error(error.message || "Sign in failed");
    }
};

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) {
            throw new Error("Failed to get current user");
        }

        console.log(`[getCurrentUser] Account ID: ${currentAccount.$id}`);

        const currentUser = await databases.getDocument(
            appwriteConfig.databaseID!,
            appwriteConfig.userCollectionID!,
            currentAccount.$id
        );

        if (!currentUser) {
            console.log(`[getCurrentUser] No user document found for ID: ${currentAccount.$id}`);
            throw new Error("Failed to get current user");
        }

        console.log(`[getCurrentUser] User document found:`, currentUser);
        return currentUser;

    } catch (error: any) {
        console.error("Appwrite Error:", error);
        return null;
    }
};
