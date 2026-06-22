const form = document.querySelector("#form");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");

const balance = document.querySelector("#balance");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");

const list = document.querySelector("#list");

let transactions = [];

// Add Transaction
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const description = text.value.trim();
    const transactionAmount = Number(amount.value);

    if (description === "" || amount.value === "") {
        alert("Please fill all fields");
        return;
    }

    const transaction = {
        id: Date.now(),
        text: description,
        amount: transactionAmount
    };

    transactions.push(transaction);

    renderTransactions();
    updateSummary();

    text.value = "";
    amount.value = "";
});

// Render Transactions
function renderTransactions() {
    list.innerHTML = "";

    transactions.forEach(function (transaction) {

        const li = document.createElement("li");

        if (transaction.amount < 0) {
            li.classList.add("expense");
        }

        li.innerHTML = `
            <span>${transaction.text}</span>
            <span>
                ₹${transaction.amount}
                <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">
                    X
                </button>
            </span>
        `;

        list.appendChild(li);
    });
}

// Update Balance, Income, Expense
function updateSummary() {

    const amounts = transactions.map(function (transaction) {
        return transaction.amount;
    });

    const totalBalance = amounts.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

    const totalIncome = amounts
        .filter(function (amount) {
            return amount > 0;
        })
        .reduce(function (acc, curr) {
            return acc + curr;
        }, 0);

    const totalExpense = amounts
        .filter(function (amount) {
            return amount < 0;
        })
        .reduce(function (acc, curr) {
            return acc + curr;
        }, 0);

    balance.textContent = `₹${totalBalance}`;
    income.textContent = `₹${totalIncome}`;
    expense.textContent = `₹${Math.abs(totalExpense)}`;
}

// Delete Transaction
function deleteTransaction(id) {

    transactions = transactions.filter(function (transaction) {
        return transaction.id !== id;
    });

    renderTransactions();
    updateSummary();
}