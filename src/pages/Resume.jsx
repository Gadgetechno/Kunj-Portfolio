import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Mohit Agrawal
            </h3>
            <p style={{ fontSize: 15, color: "#ccc" }}>
              B.Tech CSE — Lovely Professional University
            </p>
            <p style={{ marginTop: 4, fontSize: 14, color: "#aaa" }}>
              📍 Punjab, India
            </p>
            <p style={{ marginTop: 4, fontSize: 14, color: "#aaa" }}>
              ✉️ mohitagrawal250205@gmail.com | 📞 +91 6377291643
            </p>
            <p style={{ marginTop: 4, fontSize: 14, color: "#aaa" }}>
              🔗 LinkedIn: linkedin.com/in/mohitagrawalcse  
            </p>
            <p style={{ marginTop: 4, fontSize: 14, color: "#aaa" }}>
              🔗 GitHub: github.com/Gadgetechno
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Dedicated Computer Science student with strong skills in Python, C++, SQL,
              machine learning fundamentals, data preprocessing, visualization, and
              predictive modeling. Experienced working with real-time data pipelines,
              dashboards, and ML workflows through internship experience and academic projects.
            </p>
          </motion.div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            ⚙️ Skills
          </h4>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li><strong>Languages:</strong> C++, Python, C, SQL, Java</li>
            <li><strong>Libraries:</strong> NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn</li>
            <li><strong>Tools:</strong> MySQL, Git, GitHub, Jupyter Notebook</li>
            <li><strong>Core:</strong> OOP, OS Concepts, Data Preprocessing, ML Basics</li>
            <li><strong>Soft Skills:</strong> Problem Solving, Teamwork, Analytical Thinking</li>
          </ul>
        </motion.div>

        {/* INTERNSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: 40,
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Internship
          </h4>

          <div style={{ lineHeight: 1.8 }}>
            <strong>Research Engineer Intern — ZEETRON NETWORKS PVT LTD</strong>  
            <span style={{ color: "#aaa" }}> (June 2025 – July 2025)</span>
            <ul style={{ marginTop: 8, paddingLeft: 16 }}>
              <li>Worked on real-time model training, data processing and dashboards.</li>
              <li>Optimized model accuracy and automated reporting workflows.</li>
              <li>Integrated Python + SQL data pipelines to reduce preprocessing time.</li>
              <li>Prepared technical documentation and submitted reports to engineers.</li>
            </ul>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            📌 Projects
          </h4>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Crime Rate Prediction System (May – July 2025)</strong>
              <ul style={{ paddingLeft: 16 }}>
                <li>Forecasted region-wise crime rates using ML models.</li>
                <li>Performed data cleaning & feature engineering.</li>
                <li>EDA with Matplotlib & Seaborn.</li>
                <li>Compared Logistic Regression, Random Forest & XGBoost.</li>
              </ul>
            </li>

            <li style={{ marginTop: 16 }}>
              <strong>IMDB Sentiment Analysis (Jan – March 2025)</strong>
              <ul style={{ paddingLeft: 16 }}>
                <li>Built ML model to classify positive/negative reviews.</li>
                <li>Used TF-IDF + Logistic Regression.</li>
                <li>Deployed using Streamlit.</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎖 Certifications
          </h4>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>FreeCodeCamp Web Development Certification — Aug 2024</li>
            <li>Google: Bits & Bytes of Computer Networking — Nov 2023</li>
          </ul>
        </motion.div>

        {/* ACHIEVEMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🏆 Achievements
          </h4>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>Participated in IIIT Delhi Hackathon (Aug 2025)</li>
            <li>Solved 350+ coding problems (GFG + LeetCode)</li>
            <li>Volunteered at Coke Studio Event, 2024</li>
            <li>Top 10% rank in college hackathon, 2024</li>
          </ul>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science Engineering</strong> — LPU  
              <br />CGPA: 7.14
            </li>

            <li style={{ marginTop: 12 }}>
              <strong>MDS Public School</strong> — Intermediate  
              <br />Percentage: 70%
            </li>

            <li style={{ marginTop: 12 }}>
              <strong>Alpine Vidyapeeth Public School</strong> — Matriculation  
              <br />Percentage: 93%
            </li>
          </ul>
        </motion.div>

        {/* PDF + Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Mohit Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
