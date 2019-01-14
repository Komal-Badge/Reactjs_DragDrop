import * as React from 'react';
import  './headerFooter.css';
interface IProps {
    heading: string
}
export class HeaderFooter extends React.Component<IProps, {}> {
    render() {
        let { heading } = this.props;
        return (
            <div className={"header-footer-backgroundColor " +(heading=='Home' ? 'header' : 'footer')}>
                {heading}
            </div>
        )
    }
}