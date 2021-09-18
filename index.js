
class ImageWithBackground extends React.Component
{
    render()
    {
        const div = React.createElement('div', {}, null);
        return div
    }
}

ReactDOM.render(React.createElement(ImageWithBackground, {}, null), document.getElementById('app'))
