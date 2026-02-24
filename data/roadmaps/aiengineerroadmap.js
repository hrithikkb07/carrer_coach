export const aiEngineerRoadmap = {
  slug: "aiengineer",
  title: "AI Engineer Roadmap (Beginner → Interview-Ready)",
  description: "A fundamentals-first roadmap focused on mathematics, machine learning, deep learning, and real-world AI system design expected in product-based company interviews.",
  phases: [
    {
      phase: "Phase 1: Programming & Math Foundations",
      goal: "Build the absolute core required to understand and implement AI systems.",
      topics: [
        {
          name: "Programming with Python",
          explanation: "Python is the primary language used to build and experiment with AI models.",
          interview: "Interviewers test clean coding, data structures, and basic algorithmic thinking.",
          difficulty: "Easy",
          references: [
            "https://docs.python.org/3/tutorial/",
            "https://realpython.com/"
          ]
        },
        {
          name: "Linear Algebra Basics",
          explanation: "Linear algebra explains vectors, matrices, and transformations used in ML models.",
          interview: "Interviewers test intuition behind matrices rather than heavy math proofs.",
          difficulty: "Easy",
          references: [
            "https://www.khanacademy.org/math/linear-algebra",
            "https://www.deeplearning.ai/resources/linear-algebra/"
          ]
        },
        {
          name: "Probability & Statistics",
          explanation: "Probability helps model uncertainty and data distributions.",
          interview: "Common trap: knowing formulas without understanding distributions and variance.",
          difficulty: "Easy",
          references: [
            "https://www.khanacademy.org/math/statistics-probability",
            "https://seeing-theory.brown.edu/"
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Core Machine Learning",
      goal: "Understand how machines learn patterns from data.",
      topics: [
        {
          name: "Supervised vs Unsupervised Learning",
          explanation: "Supervised learning uses labeled data; unsupervised finds patterns without labels.",
          interview: "Interviewers ask when to use which approach with real examples.",
          difficulty: "Medium",
          references: [
            "https://developers.google.com/machine-learning/crash-course/ml-intro",
            "https://scikit-learn.org/stable/tutorial/basic/tutorial.html"
          ]
        },
        {
          name: "Core ML Algorithms",
          explanation: "Algorithms like linear regression, logistic regression, and decision trees form the ML base.",
          interview: "Interviewers test intuition, assumptions, and failure cases.",
          difficulty: "Medium",
          references: [
            "https://scikit-learn.org/stable/supervised_learning.html",
            "https://www.statlearning.com/"
          ]
        },
        {
          name: "Model Evaluation & Bias-Variance",
          explanation: "Evaluation measures how well models generalize to unseen data.",
          interview: "Very common rejection area if bias-variance tradeoff is unclear.",
          difficulty: "Medium",
          references: [
            "https://developers.google.com/machine-learning/crash-course/model-evaluation",
            "https://scikit-learn.org/stable/modules/model_evaluation.html"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Deep Learning Fundamentals",
      goal: "Learn how neural networks power modern AI systems.",
      topics: [
        {
          name: "Neural Networks Basics",
          explanation: "Neural networks learn representations using layers and activation functions.",
          interview: "Interviewers test forward pass, backpropagation, and intuition.",
          difficulty: "Medium",
          references: [
            "https://www.deeplearning.ai/resources/neural-networks/",
            "https://cs231n.github.io/"
          ]
        },
        {
          name: "Optimization & Loss Functions",
          explanation: "Optimization adjusts model weights to minimize error.",
          interview: "Common trap: using optimizers without understanding learning rate effects.",
          difficulty: "Hard",
          references: [
            "https://pytorch.org/docs/stable/optim.html",
            "https://distill.pub/2017/momentum/"
          ]
        },
        {
          name: "Regularization & Generalization",
          explanation: "Techniques that prevent models from overfitting data.",
          interview: "Interviewers ask how to improve model performance on unseen data.",
          difficulty: "Hard",
          references: [
            "https://cs231n.github.io/neural-networks-2/",
            "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Applied AI Domains",
      goal: "Apply AI to real-world problem domains.",
      topics: [
        {
          name: "Natural Language Processing",
          explanation: "NLP enables machines to understand and generate human language.",
          interview: "Interviewers test embeddings, transformers, and text preprocessing.",
          difficulty: "Hard",
          references: [
            "https://huggingface.co/learn/nlp-course",
            "https://nlp.stanford.edu/"
          ]
        },
        {
          name: "Computer Vision",
          explanation: "Computer vision enables machines to understand images and videos.",
          interview: "Interviewers test CNN intuition and image-based problem solving.",
          difficulty: "Hard",
          references: [
            "https://cs231n.stanford.edu/",
            "https://www.tensorflow.org/tutorials/images"
          ]
        },
        {
          name: "Recommendation Systems",
          explanation: "Recommend content using user behavior and similarity patterns.",
          interview: "Interviewers test collaborative filtering vs content-based systems.",
          difficulty: "Hard",
          references: [
            "https://developers.google.com/machine-learning/recommendation",
            "https://www.kaggle.com/learn/recommender-systems"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: MLOps & Production AI",
      goal: "Deploy, monitor, and maintain AI systems in production.",
      topics: [
        {
          name: "Model Deployment",
          explanation: "Serving trained models via APIs or batch pipelines.",
          interview: "Interviewers test how you move from notebook to production.",
          difficulty: "Hard",
          references: [
            "https://mlflow.org/docs/latest/index.html",
            "https://www.tensorflow.org/tfx"
          ]
        },
        {
          name: "Model Monitoring & Drift",
          explanation: "Detect performance degradation and data drift over time.",
          interview: "Common trap: ignoring monitoring after deployment.",
          difficulty: "Hard",
          references: [
            "https://www.evidentlyai.com/",
            "https://seldon.io/solutions/ml-monitoring/"
          ]
        },
        {
          name: "Scalable Training Pipelines",
          explanation: "Train models efficiently on large datasets.",
          interview: "Interviewers test distributed training understanding.",
          difficulty: "Hard",
          references: [
            "https://pytorch.org/docs/stable/distributed.html",
            "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: AI System Design & Interviews",
      goal: "Think like an AI engineer and clear product-based interviews.",
      topics: [
        {
          name: "AI System Design",
          explanation: "Design end-to-end AI solutions with data, models, and infra.",
          interview: "Interviewers test trade-offs, constraints, and scalability.",
          difficulty: "Hard",
          references: [
            "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
            "https://github.com/chiphuyen/machine-learning-systems-design"
          ]
        },
        {
          name: "Ethics & Responsible AI",
          explanation: "AI systems must be fair, explainable, and safe.",
          interview: "Interviewers test awareness of bias and real-world impact.",
          difficulty: "Hard",
          references: [
            "https://ai.google/responsibilities/responsible-ai-practices/",
            "https://www.ibm.com/topics/responsible-ai"
          ]
        },
        {
          name: "AI Interview Patterns",
          explanation: "Combines ML theory, coding, and system thinking.",
          interview: "Interviewers value fundamentals over buzzwords.",
          difficulty: "Hard",
          references: [
            "https://www.interviewquery.com/",
            "https://leetcode.com/"
          ]
        }
      ]
    }
  ]
};
