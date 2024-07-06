import { useLoaderData } from "react-router-dom";
import User from "../User/User";



const Users = () => {
    // do this following thing to load data 
// state --> data
// state --> loader
// use effect 
// fetct --> state set --> set state 
// loader state make false 

// etokiso kore felse main.jsx er loader jeta fetch kore felse 

// যখন আপনি কোনো route এর সাথে সম্পর্কিত ডাটা ফেচ করতে চান এবং সেই ডাটা route এর কম্পোনেন্ট render হবার আগে ফেচ করা প্রয়োজন।

// যখন আপনি নিশ্চিত করতে চান যে route কম্পোনেন্টটি render হবার আগে ডাটা সম্পূর্ণভাবে লোড হয়েছে।

// যখন আপনি nested routes এবং তাদের parent routes এর ডাটা ফেচ করতে চান।


// useEffect
// কখন ব্যবহার করবেন:
// যখন ডাটা ফেচ করা প্রয়োজন এবং সেই ডাটা অ্যাসিনক্রোনাস ভাবে কম্পোনেন্টের লাইফসাইকেলের সময় ফেচ করা হবে।

// যখন ডাটা ফেচ করা হবে user interaction (যেমন বাটন ক্লিক) বা নির্দিষ্ট ইভেন্ট এর উপর নির্ভর করে।

// যখন ডাটা ফেচ করা হবে এমন ভাবে যে এটি route এর সাথে সরাসরি সম্পর্কিত নয় বা আপনি ডাটা ফেচ করার সময় loading state পরিচালনা করতে চান।

const users =useLoaderData();

    return (
        <div>
            <h2 className="text-2xl font-medium m-5">Our Users : {users.length}</h2>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;