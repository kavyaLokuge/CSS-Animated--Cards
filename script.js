"use strict";
const Card = (props) => {
    const getStyles = () => {
        const styles = {
            left: `calc(${props.index * 20}% - ${props.index * 20}px)`,
            zIndex: props.index
        };
        if (props.selected) {
            styles.left = "50%";
            styles.zIndex = 10;
        }
        return styles;
    };
    const handleOnClick = () => {
        if (!props.selected) {
            props.select(props.id);
        }
    };
    const handleClose = () => {
        if (props.selected) {
            props.select();
        }
    };
    const getContent = () => {
        if (props.selected) {
            return (React.createElement("div", { className: "content" },
                React.createElement("div", { className: "title" },
                    React.createElement("h1", null, props.title)),
                React.createElement("div", { className: "text" },
                    React.createElement("p", null, props.text)),
                React.createElement("button", { type: "button", className: "close-button", onClick: handleClose },
                    React.createElement("i", { className: "fas fa-times" }))));
        }
        return null;
    };
    const classes = classNames("card-wrapper", { selected: props.selected });
    return (React.createElement("div", { className: classes, style: getStyles(), onClick: handleOnClick },
        React.createElement("div", { className: "card" },
            React.createElement("div", { className: "icon" },
                React.createElement("i", { className: props.icon })),
            getContent())));
};
const App = (props) => {
    const cards = [
        { id: 1, icon: "fas fa-cheese", title: "Baked Goods", text: "Freshly Baked goods ranging from bread, pasteries and pies." },
        { id: 2, icon: "fas fa-ice-cream", title: "Sweet Treats", text: "Satisfy your sweet tooth from a range of fresh sweet treats." },
        { id: 3, icon: "fas fa-pepper-hot", title: "Authentic Mexican", text: "Hot and spicy authentic mexican cuisine." },
        { id: 4, icon: "fas fa-hamburger", title: "Juicy Burgers", text: "Veh and Non-veg Juicy burgers made fresh everyday ." },
        { id: 5, icon: "fas fa-pizza-slice", title: "Pizza Italiano", text: "Be exported to italy with a range of delicious authentic italian pizzas." }
    ];

    

    const [selectedCard, setSelectedCard] = React.useState(null);

    const selectCard = (id) => {
        if (id) {
            setSelectedCard(cards.find((card) => card.id === id));
        }
        else {
            setSelectedCard(null);
        }
    };

    const getCards = () => {
        return cards.map((card, index) => {
            return (React.createElement(Card, { key: card.id, id: card.id, index: index, icon: card.icon, title: card.title, text: card.text, selected: selectedCard && selectedCard.id === card.id, select: selectCard }));
        });
    };
    
    return (React.createElement("div", { id: "app" },
        React.createElement("div", { id: "cards-wrapper" },
            React.createElement("div", { id: "cards" }, getCards()))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
