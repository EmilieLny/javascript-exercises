const crypto = require("crypto");

class UserManager {
    constructor() {
        this.reset_requests = {};
        this.users = {
            Abby: "old password",
            Brian: "password123",
        };
    }

    request_password_reset(user_id) {
        let newCode = this._generate_code();
        if (!this.reset_requests?.[user_id]) {
            this.reset_requests[user_id] = newCode;
            return newCode;
        } else {
            return this.reset_requests[user_id];
        }
    }

    reset_password(user_id, code, new_password) {
        if (code !== this.reset_requests[user_id]) return false;

        this.reset_requests[user_id] = null;
        if (this.users[user_id] === new_password) return false;

        this.users[user_id] = new_password;
        return true;
    }

    is_password_matching(user_id, password) {
        return this.users[user_id] == password;
    }

    _generate_code() {
        return crypto.randomBytes(20).toString("hex");
    }
}

const um = new UserManager();
const user_id = "Abby";
const code = um.request_password_reset(user_id);
um.reset_password(user_id, code, "new password");
console.log(um.is_password_matching(user_id, "new password"));
const newCode = um.request_password_reset(user_id);
console.log(newCode == um.request_password_reset(user_id));
console.log(um.reset_password("Brian", newCode, "new pw"));