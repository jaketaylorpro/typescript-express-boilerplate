import * as React from 'react';
import { IViewModel } from '../models/viewModel';
interface IProps {
    Model: IViewModel;
}

class State {
    on: boolean;
    constructor() {
        this.on = true;
    }
}

export default class View extends React.Component<IProps, State> {
    handleClick: () => void;
    constructor(props: IProps) {
        super(props);
        this.state = new State();
        this.handleClick = () =>
            this.setState({on: !this.state.on});
    }
    render() {
        return <div>
            <h1>{this.props.Model.Message}</h1>
            <a onClick={this.handleClick}>click</a>
            <span>{this.state.on ? 'on' : 'off'}</span>
        </div>;
    }
}