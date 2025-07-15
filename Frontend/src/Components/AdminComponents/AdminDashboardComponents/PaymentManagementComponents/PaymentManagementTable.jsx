"use client"

import { useState } from "react"
import { Search, Download, Eye, RefreshCw, CreditCard, DollarSign, TrendingUp } from "lucide-react"

const payments = [
  {
    id: "PAY001",
    bookingId: "BK001",
    customer: "Sarah Johnson",
    vendor: "Premium Photography Co.",
    amount: "£1,200",
    commission: "£120",
    vendorPayout: "£1,080",
    status: "completed",
    method: "card",
    date: "2024-01-15",
    transactionId: "txn_1234567890",
  },
  {
    id: "PAY002",
    bookingId: "BK002",
    customer: "Ahmed Khan",
    vendor: "Elite Videography",
    amount: "£800",
    commission: "£80",
    vendorPayout: "£720",
    status: "pending",
    method: "bank_transfer",
    date: "2024-01-12",
    transactionId: "txn_1234567891",
  },
  {
    id: "PAY003",
    bookingId: "BK003",
    customer: "Priya Sharma",
    vendor: "Bridal Beauty Studio",
    amount: "£350",
    commission: "£35",
    vendorPayout: "£315",
    status: "completed",
    method: "card",
    date: "2024-01-10",
    transactionId: "txn_1234567892",
  },
  {
    id: "PAY004",
    bookingId: "BK004",
    customer: "James Wilson",
    vendor: "Royal Catering",
    amount: "£2,500",
    commission: "£250",
    vendorPayout: "£2,250",
    status: "refunded",
    method: "card",
    date: "2024-01-08",
    transactionId: "txn_1234567893",
  },
]

 function PaymentManagementTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [activeTab, setActiveTab] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredPayments = payments.filter(
    (payment) =>
      (payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (payment.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeTab === "all" || payment.status === activeTab)
      ))
  ) 

  const getStatusColor = (status) => { 
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "refunded":
        return "bg-blue-100 text-blue-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getMethodIcon = (method) => {
    switch (method) {
      case "card":
        return <CreditCard className="h-4 w-4" />
      case "bank_transfer":
        return <DollarSign className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  const handlePaymentSelect = (payment) => {
    setSelectedPayment(payment)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6 p-4">
      <div>
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <p className="text-gray-500">Track and manage all payment transactions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex flex-wrap justify-between items-center">
            <h3 className="text-sm font-medium">Total Revenue</h3>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">£45,231</div>
            <p className="text-xs text-gray-500">+15% from last month</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Commission Earned</h3>
            <TrendingUp className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="t ext-2xl font-bold">£4,523</div>
            <p className="text-xs text-gray-500">10% average commission</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Pending Payments</h3>
            <RefreshCw className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">£3,200</div>
            <p className="text-xs text-gray-500">12 transactions</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Refunds</h3>
            <RefreshCw className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">£850</div>
            <p className="text-xs text-gray-500">3 refunds this month</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-8">
       

        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-xl font-bold">Payment Transactions</h2>
            <p className="text-gray-500">All payment transactions and their status</p>
            <div className="flex flex-wrap gap-4     justify-between items-center mt-4">
              <div className="flex border border-gray-300 rounded-lg p-2 items-center space-x-2">

                <input
                  type="text"
                  placeholder="Search payments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-none outline-none rounded-md px-3 py-2 max-w-sm"
                />
                                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <button className="flex items-center btn2 hover:text-white rounded-md px-3 py-2">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
          
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-300 ">
                  <th className="text-left py-2">Transaction ID</th>
                  <th className="text-left py-2">Customer</th>
                  <th className="text-left py-2">Vendor</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Commission</th>
                  <th className="text-left py-2">Vendor Payout</th>
                  <th className="text-left py-2">Method</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="border-b">
                    <td className="py-3 font-mono text-sm">{payment.transactionId}</td>
                    <td>{payment.customer}</td>
                    <td>{payment.vendor}</td>
                    <td className="font-medium">{payment.amount}</td>
                    <td className="text-green-600">{payment.commission}</td>
                    <td>{payment.vendorPayout}</td>
                    <td>
                      <div className="flex items-center space-x-2">
                        {getMethodIcon(payment.method)}
                        <span>{payment.method.replace("_", " ")}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td>{payment.date}</td>
                    <td>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handlePaymentSelect(payment)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {payment.status === "pending" && (
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <RefreshCw className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payment Details Dialog */}
      {isDialogOpen && selectedPayment && (
        <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-gray-400 shadow-lg rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Payment Details - {selectedPayment.transactionId}</h2>
                <button 
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-500 mb-4">Complete transaction information and breakdown</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Transaction Details</h3>
                    <div className="space-y-2 mt-2">
                      <div>
                        <strong>Transaction ID:</strong> {selectedPayment.transactionId}
                      </div>
                      <div>
                        <strong>Booking ID:</strong> {selectedPayment.bookingId}
                      </div>
                      <div>
                        <strong>Date:</strong> {selectedPayment.date}
                      </div>
                      <div>
                        <strong>Method:</strong> {selectedPayment.method.replace("_", " ")}
                      </div>
                      <div>
                        <strong>Status:</strong>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(selectedPayment.status)}`}>
                          {selectedPayment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Payment Breakdown</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-semibold">{selectedPayment.amount}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Platform Commission:</span>
                        <span>{selectedPayment.commission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vendor Payout:</span>
                        <span>{selectedPayment.vendorPayout}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Parties Involved</h4>
                    <div className="space-y-2 mt-2">
                      <div>
                        <strong>Customer:</strong> {selectedPayment.customer}
                      </div>
                      <div>
                        <strong>Vendor:</strong> {selectedPayment.vendor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold mb-2">Transaction History</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Payment Initiated</span>
                    <span>{selectedPayment.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Processed</span>
                    <span>
                      {selectedPayment.status === "completed" ? selectedPayment.date : "Pending"}
                    </span>
                  </div>
                  {selectedPayment.status === "refunded" && (
                    <div className="flex justify-between text-red-600">
                      <span>Refund Processed</span>
                      <span>{selectedPayment.date}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6">
                {selectedPayment.status === "pending" && (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    Process Payment
                  </button>
                )}
                {selectedPayment.status === "completed" && (
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
                    Issue Refund
                  </button>
                )}
                <button className="border btn2 px-4 py-2 rounded-md">
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default  PaymentManagementTable
