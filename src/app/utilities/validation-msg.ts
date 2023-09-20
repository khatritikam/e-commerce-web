export const validation_msg: { [key: string]: any } = {
    signUp: {
        signIn: {
            name: {
                required: 'Your full Name is  requied.',
                pattern: 'name can not be a number or special characters.',
                minlength: (val: number) => `name should contain at least ${val} latter. `,
                maxlength: (val: number) => `name should contain at least ${val} latter. `
            },
            mobileNumber: {
                required: 'Your Mobile Number is  requied.',
                pattern: 'Mobile Number you entered is invalid.'
            },
            email: {
                required: 'Your E-mail is  requied.',
                email: 'E-mail you entered is invalid',
            },
            password: {
                required: 'Your Password is  requied.',
                minlength: (val: number) => `Password should contain at least ${val} carector. `,
                maxlength: (val: number) => `Password can not more then ${val} carector. `
            },
            confirmPassword: {
                required: 'Your Confirm Password is  requied.',
                mustMatch: 'Password Mismatch',
            },

        }
    }
}