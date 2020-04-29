const handleMenuClick = (context) => {

    console.log(context);
    const {
        ipodState,
        flipCard,
        setFlipCard,
        setFlipCardSelected,
    } = context;

    if (ipodState === 'coverflow') {
        // setFlipCardSelected(0);
        setFlipCard(!flipCard);
    };
};
export default handleMenuClick;