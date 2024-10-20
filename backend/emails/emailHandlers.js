import { mailtrapClient, sender } from "../database/mailtrap.js";
import { createCommentNotificationEmailTemplate, createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Welcome to Unlinked",
            html: createWelcomeEmailTemplate(name, profileUrl),
            category: "Welcome"
        });

        console.log("Welcome Email sent successfully", response);

    } catch (error) {
        throw error;
    }
};

export const sendCommentNotificationEmail = async (
    recipientEmail,
    recipientName,
    commenterName,
    postUrl,
    commentContent
) => {
    const recipient = [{ email: recipientEmail }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "New Comment on Your Post",
            html: createCommentNotificationEmailTemplate(
                recipientName,
                commenterName,
                postUrl,
                commentContent
            ),
            category: "Comment Notification"
        });

        console.log("Comment Notification Email sent successfully", response);
    } catch (error) {
        throw error;
    }
}