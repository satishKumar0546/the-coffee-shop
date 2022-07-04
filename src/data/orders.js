const orders = [
    {
        "user": "coach",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "ellis",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "coach",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "zoey",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "zoey",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "nick",
        "drink": "mocha",
        "size": "large"
    },
    {
        "user": "bill",
        "drink": "super mocha crapu caramel cream",
        "size": "ultra"
    },
    {
        "user": "ellis",
        "drink": "mocha",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "francis",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "mocha",
        "size": "medium"
    },
    {
        "user": "coach",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "bill",
        "drink": "mocha",
        "size": "medium"
    },
    {
        "user": "ellis",
        "drink": "mocha",
        "size": "small"
    },
    {
        "user": "louis",
        "drink": "mocha",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "zoey",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "ellis",
        "drink": "latte",
        "size": "small"
    },
    {
        "user": "louis",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "zoey",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "louis",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "zoey",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "rochelle",
        "drink": "super mocha crapu caramel cream",
        "size": "large"
    },
    {
        "user": "coach",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "francis",
        "drink": "mocha",
        "size": "small"
    },
    {
        "user": "francis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "francis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "ellis",
        "drink": "flat white",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "ellis",
        "drink": "super mocha crapu caramel cream",
        "size": "huge"
    },
    {
        "user": "ellis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "latte",
        "size": "small"
    },
    {
        "user": "nick",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "ellis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "latte",
        "size": "large"
    },
    {
        "user": "coach",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "rochelle",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "ellis",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "bill",
        "drink": "latte",
        "size": "large"
    },
    {
        "user": "rochelle",
        "drink": "super mocha crapu caramel cream",
        "size": "mega"
    },
    {
        "user": "coach",
        "drink": "mocha",
        "size": "large"
    },
    {
        "user": "bill",
        "drink": "super mocha crapu caramel cream",
        "size": "mega"
    },
    {
        "user": "francis",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "francis",
        "drink": "flat white",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "bill",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "bill",
        "drink": "super mocha crapu caramel cream",
        "size": "huge"
    },
    {
        "user": "ellis",
        "drink": "super mocha crapu caramel cream",
        "size": "ultra"
    },
    {
        "user": "rochelle",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "louis",
        "drink": "mocha",
        "size": "large"
    },
    {
        "user": "coach",
        "drink": "super mocha crapu caramel cream",
        "size": "large"
    },
    {
        "user": "nick",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "bill",
        "drink": "mocha",
        "size": "medium"
    },
    {
        "user": "ellis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "nick",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "zoey",
        "drink": "super mocha crapu caramel cream",
        "size": "ultra"
    },
    {
        "user": "louis",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "louis",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "nick",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "louis",
        "drink": "mocha",
        "size": "small"
    },
    {
        "user": "louis",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "coach",
        "drink": "super mocha crapu caramel cream",
        "size": "mega"
    },
    {
        "user": "francis",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "louis",
        "drink": "flat white",
        "size": "small"
    },
    {
        "user": "bill",
        "drink": "super mocha crapu caramel cream",
        "size": "mega"
    },
    {
        "user": "zoey",
        "drink": "latte",
        "size": "small"
    },
    {
        "user": "ellis",
        "drink": "flat white",
        "size": "small"
    },
    {
        "user": "zoey",
        "drink": "flat white",
        "size": "small"
    },
    {
        "user": "ellis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "flat white",
        "size": "medium"
    },
    {
        "user": "ellis",
        "drink": "super mocha crapu caramel cream",
        "size": "large"
    },
    {
        "user": "nick",
        "drink": "latte",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "nick",
        "drink": "mocha",
        "size": "medium"
    },
    {
        "user": "louis",
        "drink": "latte",
        "size": "large"
    },
    {
        "user": "louis",
        "drink": "super mocha crapu caramel cream",
        "size": "mega"
    },
    {
        "user": "francis",
        "drink": "super mocha crapu caramel cream",
        "size": "mega"
    },
    {
        "user": "zoey",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "francis",
        "drink": "latte",
        "size": "medium"
    },
    {
        "user": "coach",
        "drink": "flat white",
        "size": "small"
    },
    {
        "user": "coach",
        "drink": "super mocha crapu caramel cream",
        "size": "large"
    },
    {
        "user": "ellis",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "louis",
        "drink": "flat white",
        "size": "medium"
    },
    {
        "user": "bill",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "nick",
        "drink": "flat white",
        "size": "large"
    },
    {
        "user": "zoey",
        "drink": "mocha",
        "size": "large"
    },
    {
        "user": "rochelle",
        "drink": "long black",
        "size": "medium"
    },
    {
        "user": "zoey",
        "drink": "latte",
        "size": "small"
    },
    {
        "user": "rochelle",
        "drink": "short espresso",
        "size": "small"
    },
    {
        "user": "francis",
        "drink": "mocha",
        "size": "large"
    },
    {
        "user": "bill",
        "drink": "long black",
        "size": "small"
    },
    {
        "user": "francis",
        "drink": "super mocha crapu caramel cream",
        "size": "ultra"
    },
    {
        "user": "rochelle",
        "drink": "super mocha crapu caramel cream",
        "size": "large"
    },
    {
        "user": "ellis",
        "drink": "super mocha crapu caramel cream",
        "size": "ultra"
    },
    {
        "user": "nick",
        "drink": "super mocha crapu caramel cream",
        "size": "huge"
    }
]

export default orders;
