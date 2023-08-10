import { render } from '@testing-library/react';

// El componente Dummy solo renderiza un mensaje en este ejemplo
const Dummy = () => {
    return <div>Hello, world!</div>;
};

test('renders dummy component', () => {
    // Renderiza el componente Dummy
    const { getByText } = render(<Dummy />);

    // Verifica que el mensaje se muestre en la pantalla
    const messageElement = getByText(/Hello, world!/i);
    expect(messageElement).toBeInTheDocument();
});
