import { render } from '@testing-library/react';

const Dummy = () => {
    return <div>Hello, world!</div>;
};

test('renders dummy component', () => {
    const { getByText } = render(<Dummy />);

    const messageElement = getByText(/Hello, world!/i);
    expect(messageElement).toBeInTheDocument();
});
