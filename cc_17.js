// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
        console.log(`New customer created: ${name}`);
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`${this.name} made a purchase of $${amount}`);
    }

    getTotalSpent() {
        const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        console.log(`${this.name}'s total spent: $${totalSpent}`);
        return totalSpent;
    }
}

let customer1 = new Customer("John Smith", "sjohn@gmail.com");
customer1.addPurchase(100);
customer1.addPurchase(50);
customer1.getTotalSpent();

// Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    addClient(customer) {
        this.clients.push(customer);
        console.log(`${customer.name} added to ${this.name}'s client list.`);
    }

    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        if (client) {
            return client.getTotalSpent();
        } else {
            console.log(`Client ${name} not found.`);
        }
    }
}

let salesRep = new SalesRep("Thomas");
salesRep.addClient(customer1);
salesRep.getClientTotal("John Smith");

// Task 3: Create a VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

    getTotalSpent() {
        let totalSpent = super.getTotalSpent();
        if (this. vipLevel === 'Gold') {
            totalSpent *= 1.1;
        } else if (this.vipLevel === 'Platinum') {
            totalSpent *= 1.2;
        }
        console.log(`${this.name} (VIP ${this.vipLevel}) total spent with bonus: $${totalSpent}`);
        return totalSpent;
    }
}

let vipCustomer = new VIPCustomer("Josh Allen", "josha@hotmail.com", "Gold");
vipCustomer.addPurchase(200);
vipCustomer.addPurchase(300);
vipCustomer.getTotalSpent();

// Task 4: Build a Client Report System
let customers = [
    customer1,
    vipCustomer
];

salesRep.addClient(customer1);
salesRep.addClient(vipCustomer);

let totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
console.log(`Total revenue: $${totalRevenue}`);

let highSpendingCustomers = customers.filter(customer => customer.getTotalSpent() > 500);
console.log('High-spending customers:', highSpendingCustomers.map(customer => customer.name));

let customerSummary = customers.map(customer => {
    return {
        name: customer.name,
        TotalSpent: customer.getTotalSpent()
    };
});
console.log('Customer Summary:', customerSummary);
