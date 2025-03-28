import ButtonNext from "./ButtonNext";
import ButtonSecondary from "./ButtonSecondary";
import { Link, useNavigate } from "react-router-dom";

const CtaComponent = () => {
    const navigate = useNavigate();
    const handlePostJobClick = () => {
        const isAuthenticated = !!localStorage.getItem("access_token");
        if (isAuthenticated) {
            navigate("/createjob");
        } else {
            navigate("/login"); // Redirect to login if not authenticated
        }
    };

    return (
        <div className="relative h-[400px] p-10 text-white bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="flex flex-col justify-center h-full relative z-10 text-center">
                <h1 className="text-4xl font-extrabold my-4">
                    Find Your Dream Job or The Perfect Candidate with LanceCAM
                </h1>
                <p className="my-4 font-medium text-lg">
                    Start your freelancing journey today with top opportunities waiting for you.
                </p>
                <div className="actions flex justify-center gap-5 mt-6">
                    <Link to="/explore">
                        <ButtonNext label={"Explore Jobs"} />
                    </Link>
                    <Link to="/createjob">
                        <ButtonSecondary label={"Post a Job"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CtaComponent;
