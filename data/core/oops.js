export const oops = {
  slug: "oops",
  title: "Object-Oriented Programming (OOPs)",
  description:
    "A complete interview-focused OOP question bank covering fundamentals to advanced design concepts tested in product-based companies.",

  phases: [
    {
      level: "Beginner",
      questions: [
        {
          question: "What is Object-Oriented Programming (OOP)?",
          answer:
            "Object-Oriented Programming is a paradigm where software is organized around objects rather than functions. Objects combine data and behavior, which makes programs easier to understand, maintain, and extend over time. OOP closely models real-world entities.",
          interviewer:
            "They check whether you explain the idea clearly instead of memorizing definitions.",
          references: ["https://en.wikipedia.org/wiki/Object-oriented_programming"],
        },
        {
          question: "What is a class?",
          answer:
            "A class is a blueprint that defines the structure and behavior of objects. It specifies variables and methods but does not occupy memory until an object is instantiated.",
          interviewer:
            "They test confusion between class definition and object memory.",
          references: ["https://www.geeksforgeeks.org/classes-objects-cpp/"],
        },
        {
          question: "What is an object?",
          answer:
            "An object is an instance of a class that represents a real-world entity. It occupies memory and interacts with other objects through method calls.",
          interviewer:
            "They test understanding of instantiation.",
          references: ["https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"],
        },
        {
          question: "What are the four pillars of OOP?",
          answer:
            "Encapsulation, Abstraction, Inheritance, and Polymorphism. These principles help create modular, reusable, and flexible systems.",
          interviewer:
            "They expect short explanation of each pillar.",
          references: ["https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"],
        },
        {
          question: "What is encapsulation?",
          answer:
            "Encapsulation bundles data and methods together while restricting direct access to internal data. It prevents misuse and enforces controlled interaction.",
          interviewer:
            "They test access modifier usage.",
          references: ["https://www.geeksforgeeks.org/encapsulation-in-cpp/"],
        },
        {
          question: "What is abstraction?",
          answer:
            "Abstraction hides implementation details and exposes only essential behavior. It reduces complexity and improves focus on usage.",
          interviewer:
            "They often ask real-world analogies.",
          references: ["https://www.geeksforgeeks.org/abstraction-in-cpp/"],
        },
        {
          question: "What is inheritance?",
          answer:
            "Inheritance allows a class to reuse properties and behavior of another class. It reduces code duplication but can increase coupling if misused.",
          interviewer:
            "They test overuse scenarios.",
          references: ["https://www.geeksforgeeks.org/inheritance-in-cpp/"],
        },
        {
          question: "What is polymorphism?",
          answer:
            "Polymorphism allows the same interface or method name to behave differently based on the object type, enabling flexible design.",
          interviewer:
            "Compile-time vs runtime clarity.",
          references: ["https://www.geeksforgeeks.org/polymorphism-in-cpp/"],
        },
        {
          question: "What is a constructor?",
          answer:
            "A constructor is a special function that initializes an object when it is created, ensuring it starts in a valid state.",
          interviewer:
            "They test constructor types.",
          references: ["https://www.geeksforgeeks.org/constructors-c/"],
        },
        {
          question: "What is a destructor?",
          answer:
            "A destructor releases resources held by an object before it is destroyed, especially important in manual memory management languages.",
          interviewer:
            "RAII concept check.",
          references: ["https://www.geeksforgeeks.org/destructors-c/"],
        },
        {
          question: "What are access modifiers?",
          answer:
            "Access modifiers control visibility of class members and enforce encapsulation by defining where data can be accessed.",
          interviewer:
            "They test data protection understanding.",
          references: ["https://www.geeksforgeeks.org/access-modifiers-in-cpp/"],
        },
        {
          question: "Difference between class and struct?",
          answer:
            "The main difference is default access level. Classes default to private, structs default to public.",
          interviewer:
            "C++ specific trap.",
          references: ["https://www.geeksforgeeks.org/difference-between-class-and-structure/"],
        },
        {
          question: "What is a method?",
          answer:
            "A method defines behavior of an object and operates on its data.",
          interviewer:
            "They test method vs function.",
          references: ["https://www.geeksforgeeks.org/methods-in-java/"],
        },
        {
          question: "What is data hiding?",
          answer:
            "Data hiding restricts direct access to internal variables, preventing misuse and improving security.",
          interviewer:
            "Often confused with abstraction.",
          references: ["https://www.geeksforgeeks.org/data-hiding-in-cpp/"],
        },
        {
          question: "What is method overloading?",
          answer:
            "Method overloading allows multiple methods with the same name but different parameters, enabling compile-time polymorphism.",
          interviewer:
            "Signature matching rules.",
          references: ["https://www.geeksforgeeks.org/function-overloading-cpp/"],
        },
        {
          question: "What is method overriding?",
          answer:
            "Method overriding allows a subclass to provide its own implementation of a parent class method, enabling runtime polymorphism.",
          interviewer:
            "Virtual keyword check.",
          references: ["https://www.geeksforgeeks.org/function-overriding-cpp/"],
        },
        {
          question: "What is static keyword?",
          answer:
            "Static members belong to the class rather than instances and are shared across all objects.",
          interviewer:
            "Memory behavior tested.",
          references: ["https://www.geeksforgeeks.org/static-members-cpp/"],
        },
        {
          question: "What is an interface?",
          answer:
            "An interface defines a contract that implementing classes must follow, supporting abstraction and multiple inheritance.",
          interviewer:
            "Difference from abstract class.",
          references: ["https://www.geeksforgeeks.org/interfaces-in-java/"],
        },
        {
          question: "What is this keyword?",
          answer:
            "`this` refers to the current object instance and resolves naming ambiguity.",
          interviewer:
            "Scope clarity.",
          references: ["https://www.geeksforgeeks.org/this-pointer-in-cpp/"],
        },
        {
          question: "What is a namespace?",
          answer:
            "A namespace groups related identifiers and avoids naming conflicts in large codebases.",
          interviewer:
            "Large project organization.",
          references: ["https://www.geeksforgeeks.org/namespace-in-cpp/"],
        },
        {
          question: "What is object lifecycle?",
          answer:
            "It includes object creation, usage, and destruction phases.",
          interviewer:
            "Memory flow clarity.",
          references: ["https://www.geeksforgeeks.org/object-life-cycle-in-java/"],
        },
        {
          question: "What is default constructor?",
          answer:
            "A constructor with no parameters that initializes objects with default values.",
          interviewer:
            "Implicit vs explicit.",
          references: ["https://www.geeksforgeeks.org/default-constructors-cpp/"],
        },
        {
          question: "What is copy constructor?",
          answer:
            "A copy constructor initializes an object using another object of the same class.",
          interviewer:
            "Shallow vs deep copy.",
          references: ["https://www.geeksforgeeks.org/copy-constructor-in-cpp/"],
        },
        {
          question: "What is const correctness?",
          answer:
            "Const correctness ensures variables and methods do not modify data unintentionally, improving safety and readability.",
          interviewer:
            "Senior-level clarity.",
          references: ["https://www.geeksforgeeks.org/const-keyword-in-cpp/"],
        }
      ],
    },

    {
      level: "Intermediate",
      questions: [
        {
          question: "Difference between abstraction and encapsulation?",
          answer:
            "Encapsulation hides data while abstraction hides implementation. Encapsulation focuses on protection, abstraction focuses on simplicity.",
          interviewer:
            "Very common filter question.",
          references: ["https://www.geeksforgeeks.org/difference-between-abstraction-and-encapsulation/"],
        },
        {
          question: "Difference between abstract class and interface?",
          answer:
            "Abstract classes can have implemented methods and state, while interfaces define only contracts and support multiple inheritance.",
          interviewer:
            "Design trade-offs.",
          references: ["https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface/"],
        },
        {
          question: "What is virtual function?",
          answer:
            "A virtual function ensures that the derived class method is invoked using a base class pointer.",
          interviewer:
            "Runtime polymorphism check.",
          references: ["https://www.geeksforgeeks.org/virtual-function-cpp/"],
        },
        {
          question: "What is diamond problem?",
          answer:
            "It occurs when a class inherits from two classes with a common base, causing ambiguity.",
          interviewer:
            "Solved using virtual inheritance.",
          references: ["https://www.geeksforgeeks.org/multiple-inheritance-in-cpp/"],
        },
        {
          question: "What is deep copy vs shallow copy?",
          answer:
            "Shallow copy copies references, deep copy duplicates actual data, preventing shared memory issues.",
          interviewer:
            "Memory safety check.",
          references: ["https://www.geeksforgeeks.org/shallow-copy-and-deep-copy-in-cpp/"],
        },
        {
          question: "Why destructor should be virtual?",
          answer:
            "To ensure proper cleanup when deleting derived objects via base class pointers.",
          interviewer:
            "Memory leak trap.",
          references: ["https://www.geeksforgeeks.org/virtual-destructor/"],
        },
        {
          question: "What is composition?",
          answer:
            "Composition builds complex objects using simpler ones, offering flexibility over inheritance.",
          interviewer:
            "Preferred design choice.",
          references: ["https://www.geeksforgeeks.org/composition-in-cpp/"],
        },
        {
          question: "What is aggregation?",
          answer:
            "Aggregation represents a HAS-A relationship with weak ownership.",
          interviewer:
            "Ownership clarity.",
          references: ["https://www.geeksforgeeks.org/association-composition-aggregation/"],
        },
        {
          question: "What is association?",
          answer:
            "Association represents a relationship between independent objects.",
          interviewer:
            "Relationship modeling.",
          references: ["https://www.geeksforgeeks.org/association-composition-aggregation/"],
        },
        {
          question: "What is SOLID?",
          answer:
            "SOLID principles guide object-oriented design to improve maintainability and scalability.",
          interviewer:
            "Design maturity.",
          references: ["https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/"],
        },

        {
          question: "What is Liskov Substitution Principle?",
          answer:
            "Derived classes should be substitutable for base classes without breaking behavior.",
          interviewer:
            "Design correctness.",
          references: ["https://www.geeksforgeeks.org/liskov-substitution-principle/"],
        },
        {
          question: "What is tight coupling?",
          answer:
            "Tight coupling means classes are highly dependent, making changes risky.",
          interviewer:
            "Architecture quality.",
          references: ["https://www.geeksforgeeks.org/tight-coupling-in-java/"],
        },
        {
          question: "What is loose coupling?",
          answer:
            "Loose coupling allows classes to interact via interfaces, improving flexibility.",
          interviewer:
            "Good design indicator.",
          references: ["https://www.geeksforgeeks.org/loose-coupling-in-java/"],
        },
        {
          question: "What is dependency inversion?",
          answer:
            "High-level modules should depend on abstractions, not concrete implementations.",
          interviewer:
            "SOLID depth.",
          references: ["https://www.geeksforgeeks.org/dependency-inversion-principle/"],
        },
        {
          question: "What is multiple inheritance?",
          answer:
            "A class inheriting from more than one base class, which can cause ambiguity.",
          interviewer:
            "Pros and cons expected.",
          references: ["https://www.geeksforgeeks.org/multiple-inheritance-in-cpp/"],
        },
        {
          question: "What is object slicing?",
          answer:
            "Object slicing occurs when derived object is copied into a base object, losing derived-specific data.",
          interviewer:
            "C++ specific trap.",
          references: ["https://www.geeksforgeeks.org/object-slicing-in-cpp/"],
        },
        {
          question: "What is final keyword?",
          answer:
            "Final prevents further inheritance or overriding, enforcing design constraints.",
          interviewer:
            "Design intent clarity.",
          references: ["https://www.geeksforgeeks.org/final-keyword-in-cpp/"],
        },
        {
          question: "What is mutable keyword?",
          answer:
            "Mutable allows modification of a member even inside const objects.",
          interviewer:
            "Const correctness depth.",
          references: ["https://www.geeksforgeeks.org/mutable-keyword-in-cpp/"],
        },
        {
          question: "What is friend function?",
          answer:
            "Friend functions can access private members of a class.",
          interviewer:
            "Encapsulation trade-off.",
          references: ["https://www.geeksforgeeks.org/friend-function-class-cpp/"],
        },
        {
          question: "What is operator overloading?",
          answer:
            "Operator overloading allows operators to have user-defined behavior.",
          interviewer:
            "Abuse scenarios.",
          references: ["https://www.geeksforgeeks.org/operator-overloading-cpp/"],
        },
        {
          question: "What is pure virtual function?",
          answer:
            "A function with no implementation that enforces method overriding.",
          interviewer:
            "Abstract class usage.",
          references: ["https://www.geeksforgeeks.org/pure-virtual-functions-and-abstract-classes/"],
        },
        {
          question: "What is cohesion?",
          answer:
            "Cohesion measures how closely related responsibilities of a class are.",
          interviewer:
            "Design quality.",
          references: ["https://www.geeksforgeeks.org/cohesion-in-java/"],
        },
        {
          question: "What is coupling?",
          answer:
            "Coupling measures dependency between classes.",
          interviewer:
            "Architecture thinking.",
          references: ["https://www.geeksforgeeks.org/coupling-in-java/"],
        },
        {
          question: "What is runtime polymorphism?",
          answer:
            "Method calls are resolved at runtime using dynamic binding.",
          interviewer:
            "Internal working.",
          references: ["https://www.geeksforgeeks.org/runtime-polymorphism-in-java/"],
        }
      ],
    },

    {
      level: "Hard",
      questions: [
        {
          question: "Why is composition preferred over inheritance?",
          answer:
            "Composition reduces tight coupling and allows behavior changes at runtime, making systems more flexible.",
          interviewer:
            "Senior-level design thinking.",
          references: ["https://martinfowler.com/articles/inheritance.html"],
        },
        {
          question: "What is fragile base class problem?",
          answer:
            "Changes in base class can unintentionally break derived classes.",
          interviewer:
            "Real-world failures.",
          references: ["https://martinfowler.com/bliki/FragileBaseClass.html"],
        },
        {
          question: "Explain runtime polymorphism internally.",
          answer:
            "Runtime polymorphism uses vtables to resolve method calls dynamically.",
          interviewer:
            "Low-level understanding.",
          references: ["https://www.geeksforgeeks.org/virtual-table-vtable-in-cpp/"],
        },
        {
          question: "What is RAII?",
          answer:
            "RAII ties resource acquisition and release to object lifetime, preventing leaks.",
          interviewer:
            "C++ memory mastery.",
          references: ["https://en.cppreference.com/w/cpp/language/raii"],
        },
        {
          question: "Explain smart pointers.",
          answer:
            "Smart pointers manage memory automatically using ownership semantics like unique and shared ownership.",
          interviewer:
            "Modern C++ expectation.",
          references: ["https://en.cppreference.com/w/cpp/memory"],
        },
        {
          question: "What is interface segregation principle?",
          answer:
            "Clients should not depend on interfaces they do not use.",
          interviewer:
            "Clean architecture.",
          references: ["https://www.geeksforgeeks.org/interface-segregation-principle/"],
        },
        {
          question: "Explain open-closed principle.",
          answer:
            "Classes should be open for extension but closed for modification.",
          interviewer:
            "Extensibility check.",
          references: ["https://www.geeksforgeeks.org/open-closed-principle/"],
        },
        {
          question: "What is dependency injection?",
          answer:
            "Dependencies are provided externally instead of being created inside classes.",
          interviewer:
            "Loose coupling test.",
          references: ["https://martinfowler.com/articles/injection.html"],
        },
        {
          question: "What is design by contract?",
          answer:
            "Methods define preconditions and postconditions to ensure correctness.",
          interviewer:
            "Advanced design concept.",
          references: ["https://martinfowler.com/bliki/DesignByContract.html"],
        },
        {
          question: "How OOP applies in large systems?",
          answer:
            "OOP enables modularization, abstraction layers, and scalable architecture.",
          interviewer:
            "System-level thinking.",
          references: ["https://martinfowler.com/articles/designDead.html"],
        },

        {
          question: "What is object composition vs aggregation?",
          answer:
            "Composition implies strong ownership; aggregation implies weak ownership.",
          interviewer:
            "Ownership modeling.",
          references: ["https://www.geeksforgeeks.org/association-composition-aggregation/"],
        },
        {
          question: "What is memory leak in OOP?",
          answer:
            "Memory leak occurs when allocated memory is not released.",
          interviewer:
            "Resource management.",
          references: ["https://www.geeksforgeeks.org/memory-leak-in-cpp/"],
        },
        {
          question: "Explain double dispatch.",
          answer:
            "Method resolution depends on both object types, often solved via visitor pattern.",
          interviewer:
            "Advanced polymorphism.",
          references: ["https://refactoring.guru/design-patterns/visitor"],
        },
        {
          question: "What is mixin?",
          answer:
            "Mixin provides reusable behavior without traditional inheritance.",
          interviewer:
            "Alternative to inheritance.",
          references: ["https://en.wikipedia.org/wiki/Mixin"],
        },
        {
          question: "What is law of demeter?",
          answer:
            "Objects should talk only to their immediate collaborators.",
          interviewer:
            "Design discipline.",
          references: ["https://martinfowler.com/bliki/LawOfDemeter.html"],
        },
        {
          question: "What is anemic domain model?",
          answer:
            "A model with data but no behavior, violating OOP principles.",
          interviewer:
            "Architecture smell.",
          references: ["https://martinfowler.com/bliki/AnemicDomainModel.html"],
        },
        {
          question: "Explain cohesion vs coupling trade-off.",
          answer:
            "High cohesion and low coupling indicate good design.",
          interviewer:
            "Design judgment.",
          references: ["https://www.geeksforgeeks.org/software-engineering-cohesion-and-coupling/"],
        },
        {
          question: "What is object pooling?",
          answer:
            "Reusing objects instead of creating new ones to improve performance.",
          interviewer:
            "Performance optimization.",
          references: ["https://refactoring.guru/design-patterns/object-pool"],
        },
        {
          question: "What is prototype pattern?",
          answer:
            "Creates objects by cloning existing ones.",
          interviewer:
            "Creational patterns.",
          references: ["https://refactoring.guru/design-patterns/prototype"],
        },
        {
          question: "When should OOP be avoided?",
          answer:
            "For simple scripts or data-heavy pipelines where procedural or functional styles are clearer.",
          interviewer:
            "Balanced engineering thinking.",
          references: ["https://martinfowler.com/articles/designDead.html"],
        }
      ],
    }
  ],
};
