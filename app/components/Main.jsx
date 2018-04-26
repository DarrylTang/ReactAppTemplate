var React = require('react');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        <p>Main.jsx</p>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;