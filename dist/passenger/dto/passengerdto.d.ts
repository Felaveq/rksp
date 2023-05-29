export declare class CreatePassengerDTO {
    fullName: string;
    phoneNumber: string;
    passport: string;
    dateOfBirth: Date;
}
export declare class UpdatePassengerDTO {
    readonly fullName?: string;
    readonly phoneNumber?: string;
    readonly passportNumber?: string;
    readonly dateOfBirth?: Date;
}
