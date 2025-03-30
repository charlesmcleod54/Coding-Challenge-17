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
