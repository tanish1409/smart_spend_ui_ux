import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import './Dashboard.css'

const Dashboard = () => {
  const [showBudgetModal, setShowBudgetModal] = useState(false)
  const [showExpenseModal, setShowExpenseModal] = useState(false)

  const categoryData = [
    { name: 'Rent', value: 400.78, color: '#C9A4E8' },
    { name: 'Food', value: 200, color: '#FFD4A3' },
    { name: 'Transport', value: 80, color: '#B8E6D5' },
    { name: 'Misc', value: 105, color: '#DDA8E0' },
  ]

  const expenses = [
    { date: '12 Nov', description: 'Groceries', category: 'Food', amount: '$75' },
    { date: '11 Nov', description: 'Movie', category: 'Misc.', amount: '$16.5' },
    { date: '11 Nov', description: 'Bus Ticket', category: 'Transport', amount: '$4.75' },
    { date: '10 Nov', description: 'Dinner', category: 'Food', amount: '$23.8' },
  ]

  // Label renderer that keeps text inside slices + scales based on size
  const renderInsideLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, name, value
  }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.55
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    const baseSize = 12
    const scale = Math.min(Math.max(value / 130, 0.9), 2.5)
    const fontSize = baseSize * scale

    return (
      <text
        x={x}
        y={y}
        fontSize={fontSize}
        fontWeight="600"
        fill="#2E2E2E"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {name}
      </text>
    )
  }

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-content">
          <div className="logo">SmartSpend</div>
          <Link to="/" className="logout-btn">Log Out</Link>
        </div>
      </nav>

      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <h1>Your Dashboard</h1>
          <p className="dashboard-subtitle">Overview of your spending for the month</p>
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card summary-card-dark-blue">
            <p className="card-label">This month</p>
            <h2 className="card-amount">$740.38</h2>
            <p className="card-detail">+12% from October</p>
          </div>

          <div className="summary-card summary-card-light-blue">
            <p className="card-label">Top category</p>
            <h2 className="card-amount">$400.78</h2>
            <p className="card-detail">Rent is your top category this month</p>
          </div>

          <div className="summary-card summary-card-dark-blue">
            <p className="card-label">Remaining</p>
            <h2 className="card-amount">$410.6</h2>
            <p className="card-detail">Based on your monthly budget</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn-action btn-black" onClick={() => setShowExpenseModal(true)}>+Expense</button>
          <button className="btn-action btn-black" onClick={() => setShowBudgetModal(true)}>+Budget</button>
        </div>

        {/* Main Grid */}
        <div className="dashboard-content">
          
          {/* Category Insights */}
          <div className="category-insights">
            <h3>Category Insights</h3>

            <div className="category-grid">
              <div className="category-card category-card-dark-blue">
                <div className="category-icon-text">
                  <span className="category-icon">🍔</span>
                  <h4>Food</h4>
                </div>
                <h2 className="category-amount">$200</h2>
                <p className="category-detail">66% of your monthly food budget</p>
              </div>

              <div className="category-card category-card-light-blue">
                <div className="category-icon-text">
                  <span className="category-icon">🏠</span>
                  <h4>Rent</h4>
                </div>
                <h2 className="category-amount">$400.78</h2>
                <p className="category-detail">100% of your monthly rent budget</p>
              </div>

              <div className="category-card category-card-light-blue">
                <div className="category-icon-text">
                  <span className="category-icon">🚗</span>
                  <h4>Transport</h4>
                </div>
                <h2 className="category-amount">$80</h2>
                <p className="category-detail">70% of your monthly transport budget</p>
              </div>

              <div className="category-card category-card-dark-blue">
                <div className="category-icon-text">
                  <span className="category-icon">📝</span>
                  <h4>Misc.</h4>
                </div>
                <h2 className="category-amount">$105</h2>
                <p className="category-detail">85% of your monthly food budget</p>
              </div>
            </div>
          </div>

          {/* Spending Breakdown */}
          <div className="spending-breakdown">
            <h3>Spending Breakdown</h3>

            <div className="chart-container">
              <ResponsiveContainer width="100%" height={390}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"     // restored proper alignment
                    outerRadius={145}
                    innerRadius={0}
                    label={renderInsideLabel}
                    labelLine={false}
                    dataKey="value"
                  >
                    {categoryData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Budget Warning */}
        <div className="budget-warning">
          <p>At this spending rate you will <span className="exceed-text">exceed</span> your monthly budget by <strong>23%</strong></p>
        </div>

        {/* Expenses */}
        <div className="expenses-section">
          <h3>Your Expenses</h3>

          <div className="expenses-table">
            <div className="table-header">
              <div>Date</div>
              <div>Description</div>
              <div>Category</div>
              <div>Amount</div>
            </div>

            {expenses.map((exp, idx) => (
              <div key={idx} className="table-row">
                <div>{exp.date}</div>
                <div>{exp.description}</div>
                <div>{exp.category}</div>
                <div>{exp.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showBudgetModal && (
        <div className="overlay" onClick={() => setShowBudgetModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Set Budget</h2>
            <div className="form-group">
              <label>Amount</label>
              <input type="number" placeholder="Enter amount" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" placeholder="e.g., Food, Rent, Transport" />
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowBudgetModal(false)}>Cancel</button>
              <button className="btn-save">Save</button>
            </div>
          </div>
        </div>
      )}

      {showExpenseModal && (
        <div className="overlay" onClick={() => setShowExpenseModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Add Expense</h2>
            <div className="form-group">
              <label>Amount</label>
              <input type="number" placeholder="Enter amount" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" placeholder="e.g., Food, Rent, Transport" />
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowExpenseModal(false)}>Cancel</button>
              <button className="btn-save">Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Dashboard
