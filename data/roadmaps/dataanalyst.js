export const dataAnalystRoadmap = {
  slug: "dataanalyst",
  title: "Data Analyst Roadmap (Beginner → Interview-Ready)",
  description: "A fundamentals-first roadmap to build strong data analysts with solid statistics, SQL, analytics thinking, and real interview depth for product-based companies.",
  phases: [
    {
      phase: "Phase 1: Data & Analytical Foundations",
      goal: "Build absolute basics of data, numbers, and analytical thinking from scratch.",
      topics: [
        {
          name: "What is Data & Data Analysis",
          explanation: "Data analysis is the process of collecting, cleaning, and interpreting data to answer business questions.",
          interview: "Interviewers ask you to explain what a data analyst actually does using real examples.",
          difficulty: "Easy",
          references: [
            "https://www.ibm.com/topics/data-analysis",
            "https://www.tableau.com/learn/articles/what-is-data-analysis"
          ]
        },
        {
          name: "Types of Data",
          explanation: "Understand structured vs unstructured data and numerical vs categorical data.",
          interview: "Often tested by asking how you would analyze different data types.",
          difficulty: "Easy",
          references: [
            "https://www.scribbr.com/methodology/types-of-data/",
            "https://www.ibm.com/topics/structured-data"
          ]
        },
        {
          name: "Basic Statistics",
          explanation: "Statistics help summarize and understand data using measures like mean and median.",
          interview: "Interviewers test whether you know when to use mean vs median.",
          difficulty: "Easy",
          references: [
            "https://www.khanacademy.org/math/statistics-probability",
            "https://www.statisticshowto.com/"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Excel & Spreadsheet Mastery",
      goal: "Learn the most commonly used analysis tool in real companies.",
      topics: [
        {
          name: "Excel Basics",
          explanation: "Excel is used to store, clean, and analyze small to medium datasets.",
          interview: "Interviewers test formulas, shortcuts, and data manipulation tasks.",
          difficulty: "Easy",
          references: [
            "https://support.microsoft.com/excel",
            "https://exceljet.net/"
          ]
        },
        {
          name: "Formulas & Functions",
          explanation: "Functions like VLOOKUP, IF, COUNT, and SUM help analyze data quickly.",
          interview: "Common trap: using the wrong lookup or nested formulas incorrectly.",
          difficulty: "Medium",
          references: [
            "https://exceljet.net/excel-functions",
            "https://support.microsoft.com/excel-functions"
          ]
        },
        {
          name: "Pivot Tables",
          explanation: "Pivot tables summarize large datasets efficiently.",
          interview: "Interviewers often ask you to explain a pivot table scenario.",
          difficulty: "Medium",
          references: [
            "https://support.microsoft.com/pivot-tables",
            "https://www.excel-easy.com/data-analysis/pivot-tables.html"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: SQL for Data Analysis",
      goal: "Query, filter, and analyze data stored in databases.",
      topics: [
        {
          name: "SQL Basics",
          explanation: "SQL is used to retrieve and manipulate data from databases.",
          interview: "Interviewers test SELECT, WHERE, ORDER BY, and LIMIT heavily.",
          difficulty: "Easy",
          references: [
            "https://www.w3schools.com/sql/",
            "https://www.postgresql.org/docs/"
          ]
        },
        {
          name: "Joins & Relationships",
          explanation: "Joins combine data from multiple tables using relationships.",
          interview: "Very common rejection area if joins are weak.",
          difficulty: "Medium",
          references: [
            "https://www.sqltutorial.org/sql-join/",
            "https://use-the-index-luke.com/sql/joins"
          ]
        },
        {
          name: "Aggregations & Window Functions",
          explanation: "Aggregations summarize data; window functions analyze trends.",
          interview: "Interviewers test GROUP BY vs window functions confusion.",
          difficulty: "Hard",
          references: [
            "https://www.postgresql.org/docs/current/tutorial-window.html",
            "https://mode.com/sql-tutorial/"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Data Visualization & BI Tools",
      goal: "Present insights clearly to non-technical stakeholders.",
      topics: [
        {
          name: "Data Visualization Principles",
          explanation: "Good charts communicate insights clearly and accurately.",
          interview: "Interviewers test chart selection and storytelling ability.",
          difficulty: "Medium",
          references: [
            "https://www.storytellingwithdata.com/",
            "https://www.tableau.com/learn/articles/data-visualization"
          ]
        },
        {
          name: "BI Tools (Tableau / Power BI)",
          explanation: "BI tools help build dashboards and reports from data sources.",
          interview: "Interviewers ask how you design dashboards for decision-makers.",
          difficulty: "Medium",
          references: [
            "https://www.tableau.com/learn/training",
            "https://learn.microsoft.com/power-bi/"
          ]
        },
        {
          name: "Dashboard Design",
          explanation: "Dashboards track KPIs and trends in real time.",
          interview: "Common trap: cluttered dashboards without clear metrics.",
          difficulty: "Hard",
          references: [
            "https://www.tableau.com/learn/articles/dashboard-design",
            "https://www.nngroup.com/articles/dashboard-design/"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Python for Data Analysis",
      goal: "Automate analysis and work with larger datasets efficiently.",
      topics: [
        {
          name: "Python Basics",
          explanation: "Python is used for data manipulation and automation.",
          interview: "Interviewers test basic syntax and data structures.",
          difficulty: "Easy",
          references: [
            "https://docs.python.org/3/tutorial/",
            "https://realpython.com/"
          ]
        },
        {
          name: "NumPy & Pandas",
          explanation: "Libraries for numerical computation and data manipulation.",
          interview: "Common trap: inefficient Pandas operations.",
          difficulty: "Medium",
          references: [
            "https://pandas.pydata.org/docs/",
            "https://numpy.org/doc/"
          ]
        },
        {
          name: "Data Cleaning & EDA",
          explanation: "Clean data and explore patterns before analysis.",
          interview: "Interviewers test how you handle missing or dirty data.",
          difficulty: "Hard",
          references: [
            "https://www.kaggle.com/learn/data-cleaning",
            "https://towardsdatascience.com/"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: Business Analytics & Interview Readiness",
      goal: "Think like a business-focused data analyst and clear interviews.",
      topics: [
        {
          name: "Business Metrics & KPIs",
          explanation: "Metrics measure business performance and guide decisions.",
          interview: "Interviewers test metric definition and trade-offs.",
          difficulty: "Medium",
          references: [
            "https://www.klipfolio.com/resources/articles/what-is-a-kpi",
            "https://www.shopify.com/blog/kpi-examples"
          ]
        },
        {
          name: "Case Studies & Analytical Thinking",
          explanation: "Solve real business problems using data-driven reasoning.",
          interview: "Very common: case-style analysis questions.",
          difficulty: "Hard",
          references: [
            "https://www.interviewquery.com/",
            "https://www.stratascratch.com/"
          ]
        },
        {
          name: "Data Analyst Interview Patterns",
          explanation: "Combines SQL, business logic, and communication skills.",
          interview: "Interviewers value clarity, not just correct answers.",
          difficulty: "Hard",
          references: [
            "https://www.interviewquery.com/blog/data-analyst-interview-questions/",
            "https://www.analyticsvidhya.com/blog/"
          ]
        }
      ]
    }
  ]
};
