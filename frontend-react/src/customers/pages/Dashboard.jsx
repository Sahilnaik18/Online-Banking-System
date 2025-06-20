import { useEffect, useState } from "react";
import axios from "axios";
import { MdAccountBalance } from "react-icons/md";
import { IoCardSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";

import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

import { ListGroup } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";

import { Badge } from "flowbite-react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { FaRepeat, FaClipboardList } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8000/dashboard";
    axios
      .get(apiUrl, { withCredentials: true })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Helper function to format the number and split into integer and decimal parts
  const formatBalance = (balance) => {
    const formattedBalance = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(balance);
    const [integerPart, decimalPart] = formattedBalance.split('.');
    return { integerPart, decimalPart };
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { integerPart, decimalPart } = formatBalance(data.totalBalance);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-5 lg:grid-cols-4">
        <div className="p-5 rounded-lg" style={{ backgroundColor: 'white' }}>
          <div className="flex flex-row gap-8 items-center">
            <span>
              <MdAccountBalance size={100} />
            </span>
            <div className="flex flex-col text-center">
              <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                {data.totalAccounts}
              </h5>
              <span className="text-gray-600 dark:text-gray-300">Total Accounts</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg" style={{ backgroundColor: 'white' }}>
          <div className="flex flex-row gap-5 items-center">
            <span>
              <IoCardSharp size={100} />
            </span>
            <div className="flex flex-col text-center">
              <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                {data.totalCards}
              </h5>
              <span className="text-gray-600 dark:text-gray-300">Total Cards</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg" style={{ backgroundColor: 'white' }}>
          <div className="flex flex-row gap-5 items-center">
            <span>
              <RiMoneyRupeeCircleFill size={100} />
            </span>
            <div className="flex flex-col text-center">
              <h5 className="text-xl font-bold tracking-tight text-blue-900 dark:text-white">
                {/* Displaying formatted balance with styled decimal part */}
                {integerPart}
                <span style={{ color: 'black' }}>.{decimalPart}</span> ₹
              </h5>
              <span className="text-gray-600 dark:text-gray-300">Total Balance</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-lg" style={{ backgroundColor: 'white' }}>
          <div className="flex flex-row gap-5 items-center">
            <span>
              <GrTransaction size={100} />
            </span>
            <div className="flex flex-col text-center">
              <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                {data.totalTransactions}
              </h5>
              <span className="text-gray-600 dark:text-gray-300">Total Transactions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gird-cols-1 md:grid-cols-4 gap-10 p-5">
        <div className="p-5 rounded-lg" style={{ backgroundColor: '#b3e2ea' }}>
          <div className="flex flex-col text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.highestAccountBalance} ₹
            </h5>
            <p className="text-xl tracking-tight text-gray-900 dark:text-white">
              {data.highestAccountNumber} {data.highestAccountType}
            </p>
            <span className="text-gray-600 dark:text-gray-300">Highest Balance Account</span>
          </div>
        </div>

        <div className="shadow-1xl p-5 rounded-lg" style={{ backgroundColor: '#b3e2ea' }}>
          <div className="flex flex-col text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.highestCardBalance} ₹
            </h5>
            <p className="text-xl tracking-tight text-gray-900 dark:text-white">
              {data.highestCardNumber} {data.highestCardType}
            </p>
            <span className="text-gray-600 dark:text-gray-300">Highest Balance Card</span>
          </div>
        </div>

        <div className="shadow-1xl p-5 rounded-lg" style={{ backgroundColor: '#b3e2ea' }}>
          <div className="flex flex-col text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              45,714 ₹
            </h5>
            <p className="text-xl tracking-tight text-gray-900 dark:text-white">Rajesh</p>
            <span className="text-gray-600 dark:text-gray-300">Highest Credited Amount</span>
          </div>
        </div>

        <div className="shadow-1xl p-5 rounded-lg" style={{ backgroundColor: '#b3e2ea' }}>
          <div className="flex flex-col text-center">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              14,524 ₹
            </h5>
            <p className="text-xl tracking-tight text-gray-900 dark:text-white">Praveen</p>
            <span className="text-gray-600 dark:text-gray-300">Highest Debited Amount</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 p-5 pb-20 gap-20">
        <div>
          <ListGroup>
            <ListGroup.Item icon={HiUserCircle} active>
              TOP CATEGORY
            </ListGroup.Item>

            <ListGroup.Item icon={FaMinusCircle} className="p-3">
              &nbsp; &nbsp; CREDIT &nbsp; &nbsp;
              <Badge color="green"> 10 </Badge>
            </ListGroup.Item>

            <ListGroup.Item icon={FaPlusCircle} className="p-3">
              &nbsp; &nbsp; DEBIT &nbsp; &nbsp;
              <Badge color="red"> 2 </Badge>
            </ListGroup.Item>

            <ListGroup.Item icon={FaRepeat} className="p-3">
              &nbsp; &nbsp; SELF &nbsp; &nbsp;
              <Badge color="blue"> 4 </Badge>
            </ListGroup.Item>

            <ListGroup.Item icon={FaShopify} className="p-3">
              &nbsp; &nbsp; Shopping &nbsp; &nbsp;
              <Badge color="info"> 11 </Badge>
            </ListGroup.Item>

            <ListGroup.Item icon={FaPlusCircle} className="p-3">
              &nbsp; &nbsp; BILL &nbsp; &nbsp;
              <Badge color="dark"> 3 </Badge>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div>
          <ListGroup>
            <ListGroup.Item icon={FaClipboardList} active>
              Last 5 Logins
            </ListGroup.Item>

            {data.loginDate.map((element, index) => (
              <ListGroup.Item key={index} icon={MdDateRange} className="p-3">
                {element}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Title>Last 5 Transactions</Timeline.Title>
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Body>
                  Transaction 1
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Title>Payment Debited</Timeline.Title>
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Body>
                  Transaction 2
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Title>Payment Debited</Timeline.Title>
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Body>
                  Transaction 3
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Title>Payment Debited</Timeline.Title>
                <Timeline.Time>February 2022</Timeline.Time>
                <Timeline.Body>
                  Transaction 4
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
