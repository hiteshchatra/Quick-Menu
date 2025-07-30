@@ .. @@
   const fadeInUp = {
     initial: { opacity: 0, y: 60 },
     animate: { opacity: 1, y: 0 },
-    transition: { duration: 0.6 }
+    transition: { duration: 0.8, ease: "easeOut" }
   };
 
   return (
@@ -17,7 +17,7 @@
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <Link 
             to="/" 
-            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
+            className="inline-flex items-center text-forest-600 hover:text-forest-700 transition-colors duration-300"
           >
             <ArrowLeft className="w-4 h-4 mr-2" />
@@ -27,7 +27,7 @@
 
         {/* Hero */}
-        <motion.section className="bg-gradient-to-br from-gray-50 to-white py-16" {...fadeInUp}>
+        <motion.section className="bg-gradient-to-br from-warm-50 to-white py-16" {...fadeInUp}>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ -44,7 +44,7 @@
           className="py-16"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
-          transition={{ delay: 0.2, duration: 0.6 }}
+          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
         >
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ -53,8 +53,8 @@
               ].map((stat, index) => (
                 <div key={index} className="text-center">
-                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
-                    <stat.icon className="w-6 h-6 text-teal-600" />
+                  <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-100 rounded-full mb-4 shadow-sm">
+                    <stat.icon className="w-6 h-6 text-forest-600" />
                   </div>
@@ -68,7 +68,7 @@
           className="py-16 bg-gray-50"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
-          transition={{ delay: 0.4, duration: 0.6 }}
+          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
         >
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ -88,7 +88,7 @@
               </div>
               <div className="relative">
-                <div className="bg-white rounded-lg shadow-lg p-6">
+                <div className="bg-white rounded-lg shadow-xl p-6">
                   <img 
@@ -106,7 +106,7 @@
           className="py-16"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
-          transition={{ delay: 0.6, duration: 0.6 }}
+          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
         >
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ -114,7 +114,7 @@
               <div className="relative order-2 lg:order-1">
-                <div className="bg-white rounded-lg shadow-lg p-6">
+                <div className="bg-white rounded-lg shadow-xl p-6">
                   <img 
@@ -142,7 +142,7 @@
         {/* Results */}
         <motion.section 
-          className="py-16 bg-gradient-to-br from-teal-50 to-coral-50"
+          className="py-16 bg-gradient-to-br from-forest-50 to-sage-50"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
-          transition={{ delay: 0.8, duration: 0.6 }}
+          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
         >
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
@@ -165,7 +165,7 @@
               ].map((result, index) => (
-                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
-                  <div className="text-4xl font-bold text-teal-600 mb-2">{result.metric}</div>
+                <div key={index} className="bg-white rounded-lg shadow-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
+                  <div className="text-4xl font-bold text-forest-600 mb-2">{result.metric}</div>
                   <div className="text-lg font-semibold text-gray-900 mb-2">{result.description}</div>
@@ -179,7 +179,7 @@
           className="py-16"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
-          transition={{ delay: 1.0, duration: 0.6 }}
+          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
         >
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
-            <div className="bg-white rounded-lg shadow-lg p-8">
+            <div className="bg-white rounded-lg shadow-2xl p-8">
               <div className="flex justify-center mb-4">
@@ -210,11 +210,11 @@
         {/* CTA */}
         <motion.section 
-          className="py-16 bg-gradient-to-br from-teal-600 to-teal-700"
+          className="py-16 bg-gradient-to-br from-forest-600 to-forest-700"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
-          transition={{ delay: 1.2, duration: 0.6 }}
+          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
         >
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
@@ -223,7 +223,7 @@
             </h2>
-            <p className="text-xl text-teal-100 mb-8">
+            <p className="text-xl text-forest-100 mb-8">
               Join hundreds of restaurants who've made the switch to digital menus
@@ -231,7 +231,7 @@
             <Link 
               to="/"
-              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
+              className="inline-flex items-center px-8 py-4 bg-white text-forest-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
             >
               Get Started Today