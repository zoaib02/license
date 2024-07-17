document.addEventListener('DOMContentLoaded', function () {
    // Check payment status from local storage and unlock buttons accordingly
    if (localStorage.getItem('paid_singleTemplate')) {
        document.getElementById('singleTemplateBtn').disabled = false;
    }
    if (localStorage.getItem('paid_allTemplates')) {
        document.getElementById('allTemplatesBtn').disabled = false;
    }
    if (localStorage.getItem('paid_lifetimeMembership')) {
        document.getElementById('lifetimeMembershipBtn').disabled = false;
    }

    // PayPal Buttons Initialization
    paypal.Buttons({
        createOrder: function(data, actions) {
            // Set up the transaction for Single Template
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '19.00'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // Capture the funds from the transaction for Single Template
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                localStorage.setItem('paid_singleTemplate', true);
                document.getElementById('singleTemplateBtn').disabled = false;
            });
        }
    }).render('#paypal-button-singleTemplate'); // Render the PayPal button for Single Template

    paypal.Buttons({
        createOrder: function(data, actions) {
            // Set up the transaction for All Templates
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '129.00'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // Capture the funds from the transaction for All Templates
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                localStorage.setItem('paid_allTemplates', true);
                document.getElementById('allTemplatesBtn').disabled = false;
            });
        }
    }).render('#paypal-button-allTemplates'); // Render the PayPal button for All Templates

    paypal.Buttons({
        createOrder: function(data, actions) {
            // Set up the transaction for Lifetime Membership
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '349.00'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // Capture the funds from the transaction for Lifetime Membership
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                localStorage.setItem('paid_lifetimeMembership', true);
                document.getElementById('lifetimeMembershipBtn').disabled = false;
            });
        }
    }).render('#paypal-button-lifetimeMembership'); // Render the PayPal button for Lifetime Membership
});

function chooseTemplate() {
    window.location.href = 'choose-template.html';
}

function buyAllTemplates() {
    window.location.href = 'buy-all-templates.html';
}

function buyLifetimeMembership() {
    window.location.href = 'buy-lifetime-membership.html';
}