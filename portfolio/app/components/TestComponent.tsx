const TestComponent = () => {
    return (
        <section
            className="h-screen w-full overflow-hidden bg-center bg-cover bg-no-repeat flex items-center justify-center"
            style={{
                backgroundImage: `url(/backgrounds/galaxy2.jpeg)`,
            }}
        >
            <h1 className="~text-xl/4xl">FLUID RESPONSIVE STYLE</h1>
        </section>
    );
};

export default TestComponent;