export class Utils {
   private _finalUsers: Object[] = [];

   // Function to add a new property with human readable date.
    public addDate(users: any): Object[] {
       let date: Date;
       
        users.forEach(item => {
            date = new Date(item.birthday*1000);
            item["date"] = date;
            this._finalUsers.push(item);
        });

        return this._finalUsers;
    }

    // Function to Know if today is user´s birthday.
    public isBirthday(date): boolean {
        const TODAY = new Date().setHours(0, 0, 0, 0);
        const birthday = date.setHours(0, 0, 0, 0);
        return TODAY === birthday;
    }

    // Function to Know if tomorrow is user´s birthday.
    public willBeBirthday(date): boolean {
        const DAY = new Date();
        DAY.setDate(DAY.getDate()+1);
        DAY.setHours(0, 0, 0, 0);
        const TOMORROW = DAY.getTime();
        const birthday = date.setHours(0, 0, 0, 0);
        return TOMORROW === birthday;
    }
}