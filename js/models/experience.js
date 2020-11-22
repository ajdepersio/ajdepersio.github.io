const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default class Experience {
    constructor(company, logo, title, department, startDate, endDate, description) {
        this.Company = company;
        this.Logo = logo;
        this.Title = title;
        this.Department = department;
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.Description = description;
    }

    get Label() {
        return `${this.Company}: ${this.Title}`;
    }

    get Tenure() {
        let endDate = (this.EndDate === undefined
            ? "Present"
            : `${monthNames[this.EndDate.getMonth()]} ${this.EndDate.getFullYear()}`);

        return `${monthNames[this.StartDate.getMonth()]} ${endDate}`;
    }
}