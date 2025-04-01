import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as Error;

    return (
        <div>
            <h1>Error Occurred</h1>
            <p>{error?.message || "Something went wrong!"}</p>
        </div>
    );
}
