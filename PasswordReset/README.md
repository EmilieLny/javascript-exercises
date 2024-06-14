# Password reset

## Requirements:

What we are implementing is a two-step password reset process. Here are the two steps:

1. Request a password reset via the `request_password_reset` method. This method stores a verification code and returns it.
2. Reset the password by calling `reset_password`. You need to provide the verification code from the previous step.

Here are the functional requirements:

1. The password can only be reset if the verification code passed to reset_password matches the one stored for a given user.
2. A user can only have one pending verification code at a time.
3. A verification code cannot be transferred to another user.
4. A verification code can only be used once.
5. A new password must be different than the old password.

A few more tips:

- the code is a work in progress, you should feel free to modify any part of it
- you can go through the `main` method to understand the flow we're trying to implement
- there are helper methods on the UserManager class that you can use
