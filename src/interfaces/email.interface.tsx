// types/EmailRequest.ts
export interface EmailRequest {
    email: string;
    subject: string;
    message: string;
    termsAccepted?: boolean
    name?: string,
}
