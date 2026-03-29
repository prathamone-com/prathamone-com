/**
 * ==========================================================
 * AITDL AI AGENT BUILD SIGNATURE
 * ==========================================================
 * Architect    : Jawahar R Mallah
 * Designation  : AI Systems Architect & Author
 * Subject      : MSBSHSE Grade 10 (Deep Offline Curriculum)
 * ==========================================================
 */

export interface DeepSovereignContent {
  microConcept: string;
  visualization: string;
  pillars: string[];
  detailedTheory: string[];
  hots: {
    question: string;
    answer: string;
    hint?: string;
  };
  eliteNotes?: {
    mnemonic?: string;
    commonMistakes: string[];
    proTip: string;
  };
  ancientIndianContext?: {
    scholar: string;
    era: string;
    contribution: string;
  };
  translations?: Record<string, Omit<DeepSovereignContent, 'translations'>>;
}

export const MSBSHSE_10_REGISTRY: Record<string, DeepSovereignContent> = {
  // ============================================================================
  // MATHEMATICS PART 1 (ALGEBRA)
  // ============================================================================
  'linear_equations_in_two_variables': {
    microConcept: 'An equation containing two variables with the highest power of 1 is called a linear equation in two variables. Its general form is ax + by + c = 0. Geometrically, it represents a straight line.',
    visualization: 'ax + by + c = 0 \\quad (a \\neq 0, b \\neq 0)',
    pillars: [
      'Algebraic Methods: Mastery of Elimination (equating coefficients) and Substitution methods.',
      'Graphical Method: Plotting at least 3 coordinates to find the physical point of intersection of two lines.',
      'Determinant Method (Cramer\'s Rule): Using the formula x = Dx/D, y = Dy/D for systematic problem solving.',
      'Application: Framing and solving real-world word problems (age, speed, work, fractions) using simultaneous equations.'
    ],
    detailedTheory: [
      '**Fundamentals of Linear Equations:** A linear equation in two variables, $x$ and $y$, represents a straight line on a Cartesian plane. The standard form is $ax + by + c = 0$, where $a$, $b$, and $c$ are real numbers, and at least one of $a$ or $b$ is non-zero. The set of coordinates $(x, y)$ that satisfy the equation forms the solution set, which consists of infinite points lying on that specific line.',
      '**Systems of Simultaneous Equations:** When two linear equations in two variables are considered simultaneously, they form a system. The solution of this system is the exact coordinate point where both lines intersect. \n- **Intersecting Lines:** Have exactly one unique solution (consistent system).\n- **Parallel Lines:** Have no solution (inconsistent system).\n- **Coincident Lines:** Have infinitely many solutions, as the lines overlap entirely.',
      '**Method 1: Elimination by Equating Coefficients:** The most common algebraic method. You multiply one or both equations by suitable constants so that the coefficients of either $x$ or $y$ become numerically equal. Then, you add or subtract the equations to eliminate that variable, solving for the remaining one. Once found, substitute it back into any original equation.',
      '**Method 2: Graphical Method (Plotting lines):** To draw the graph of an equation like $2x - y = 4$:\n1. Rewrite the equation to isolate $y$: $y = 2x - 4$.\n2. Choose at least three convenient values for $x$ (e.g., $0, 1, 2$) and calculate the corresponding $y$ values.\n   • If $x=0$, $y=-4$ $\\rightarrow (0, -4)$\n   • If $x=1$, $y=-2$ $\\rightarrow (1, -2)$\n   • If $x=2$, $y=0$ $\\rightarrow (2, 0)$\n3. Plot these points on graph paper and draw a straight line passing through them. The point where two such lines intersect provides the solution $(x, y)$.',
      '**Method 3: Cramer\'s Rule (Determinant Method):** Discovered by Swiss mathematician Gabriel Cramer, this method uses determinants for a highly systematic algebraic solution. For equations $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$:\n- Find $D = |\\begin{smallmatrix}a_1 & b_1\\\\a_2 & b_2\\end{smallmatrix}| = (a_1 \\times b_2) - (b_1 \\times a_2)$. This must not be zero.\n- Find $D_x$: Replace the $x$-column with constants $c_1, c_2$. $D_x = |\\begin{smallmatrix}c_1 & b_1\\\\c_2 & b_2\\end{smallmatrix}|$.\n- Find $D_y$: Replace the $y$-column with constants $c_1, c_2$. $D_y = |\\begin{smallmatrix}a_1 & c_1\\\\a_2 & c_2\\end{smallmatrix}|$.\n- **Solution:** $x = \\frac{D_x}{D}$ and $y = \\frac{D_y}{D}$.',
      '**Equations Reducible to Linear Form:** Sometimes equations are not linear (e.g., $2/x + 3/y = 13$). We solve these by making a substitution. Let $1/x = m$ and $1/y = n$. The equation becomes $2m + 3n = 13$, which is now a standard linear equation. Solve for $m$ and $n$, then resubstitute to find $x$ and $y$.',
      '**Word Problems & Real-World Application:** Simultaneous equations are the backbone of mathematical modeling. \n- **Age Problems:** Always assign variables to present ages (Let father\'s age be $x$, son\'s be $y$).\n- **Speed & Distance:** Use $Distance = Speed \\times Time$. For upstream/downstream problems, let boat speed be $x$ and water speed be $y$. Upstream speed is $(x - y)$, downstream is $(x + y)$.\n- **Digit Problems:** For a two-digit number, let the tens digit be $x$ and units digit be $y$. The value of the number is $10x + y$, and the reversed number is $10y + x$.'
    ],
    hots: {
      question: 'Solve the simultaneous equations graphically: $x + y = 5$ and $x - y = 1$. What are the coordinates of the point of intersection?',
      answer: 'For $x + y = 5$, coordinates can be $(0,5), (5,0), (2,3)$. For $x - y = 1$, coordinates can be $(1,0), (0,-1), (3,2)$. Plotting both lines on the Cartesian plane, they intersect precisely in the first quadrant. At intersection, $x$-coordinate is 3 and $y$-coordinate is 2. Therefore, the solution is $(3, 2)$. Algebraically: adding them gives $2x = 6 \\Rightarrow x=3$, then $3+y=5 \\Rightarrow y=2$.'
    },
    eliteNotes: {
      mnemonic: 'Cramer\'s Order: (Dx, Dy) = (Determinant_x, Determinant_y). Remember "Alphabetical Order X before Y".',
      commonMistakes: [
        'Forgetting to rewrite equations in ax + by = c form before using Cramer\'s Rule.',
        'Swapping signs when moving terms across the equal sign.',
        'Using only 2 points for a graph (Always use 3 to catch alignment errors!).'
      ],
      proTip: 'In word problems, if you get a negative value for age or speed, stop! You\'ve likely made a sign error in your equations.'
    },
    ancientIndianContext: {
      scholar: 'Bhaskaracharya II',
      era: '12th Century CE',
      contribution: 'In his magnum opus "Bijaganita", Bhaskaracharya provided advanced methods for solving linear and quadratic equations, referring to variables as "varna" (colors).'
    },
    translations: {
      hn: {
        microConcept: 'जिस समीकरण में दो चर (variables) होते हैं और जिनकी अधिकतम घात (power) 1 होती है, उसे दो चरों वाला रैखिक समीकरण कहते हैं। इसका सामान्य रूप $ax + by + c = 0$ है। ज्यामितीय रूप से, यह एक सीधी रेखा को दर्शाता है।',
        visualization: 'ax + by + c = 0 \\quad (a \\neq 0, b \\neq 0)',
        pillars: [
          'बीजगणितीय विधियाँ (Algebraic Methods): विलोपन (Elimination) और प्रतिस्थापन (Substitution) विधि में महारत हासिल करना।',
          'आलेखी विधि (Graphical Method): दो रेखाओं के प्रतिच्छेदन बिंदु को खोजने के लिए कम से कम 3 निर्देशांक (coordinates) बनाना।',
          'क्रेमर का नियम (Cramer\'s Rule): $x = D_x/D, y = D_y/D$ सूत्र का उपयोग करके व्यवस्थित रूप से हल खोजना।',
          'अनुप्रयोग: शाब्दिक प्रश्नों (उम्र, दूरी, काम) को युगपत समीकरणों में बदलकर हल करना।'
        ],
        detailedTheory: [
          '**रैखिक समीकरण के मूल सिद्धांत:** दो चरों $x$ और $y$ में एक रैखिक समीकरण ग्राफ पर एक सीधी रेखा को दर्शाता है। मानक रूप $ax + by + c = 0$ है, जहां $a, b,$ और $c$ वास्तविक संख्याएं हैं। जो बिंदु इस रेखा पर स्थित होते हैं, वे $(x, y)$ समीकरण का हल (solution) बनाते हैं।',
          '**युगपत समीकरण (Simultaneous Equations):** जब हम एक ही समय पर दो रैखिक समीकरणों पर विचार करते हैं, तो वे एक प्रणाली (system) बनाते हैं। इन दोनों रेखाओं का प्रतिच्छेदन बिंदु (Intersection Point) इन दोनों का एक सामान्य हल होता है। यदि रेखाएँ समानांतर (parallel) हैं, तो कोई हल नहीं होता।',
          '**विधि 1: गुणांक समान करके विलोपन (Elimination):** सबसे आम विधि। आप एक या दोनों समीकरणों को किसी संख्या से गुणा करते हैं ताकि $x$ या $y$ का गुणांक समान हो जाए। फिर जोड़ या घटाकर उस चर को खत्म (eliminate) कर देते हैं, जिससे दूसरा चर ज्ञात हो जाता है।',
          '**विधि 2: आलेखी विधि (Graphical Plotting):** $2x - y = 4$ जैसे समीकरण का ग्राफ खींचने के लिए: सबसे पहले $y = 2x - 4$ निकालें और $x$ के तीन मान (जैसे $0, 1, 2$) रखें। इनसे $(0,-4), (1,-2)$ निर्देशांक मिलेंगे। इन्हें ग्राफ पर प्लाट कर एक रेखा खींचे।',
          '**विधि 3: क्रेमर का नियम (Determinant Method):** स्विस गणितज्ञ गेब्रियल क्रेमर ने यह नियम बनाया। समीकरण $a_1x + b_1y = c_1$ और $a_2x + b_2y = c_2$ के लिए: सबसे पहले $D$ निकालें (जिन्हें $a_1, b_1$ से बनाया जाता है)। फिर $x$ स्तंभ को $c_1, c_2$ से बदलकर $D_x$ निकालें। अंत में $x = D_x/D$ और $y = D_y/D$ कर दें।',
          '**रैखिक समीकरणों में रूपांतरित (Reducible Equations):** कभी-कभी समीकरण रैखिक नहीं होते (जैसे $2/x + 3/y = 13$)। इन्हें हल करने के लिए $1/x = m$ और $1/y = n$ मान लें। इससे $2m + 3n = 13$ बन जाएगा जिसे पुराने तरीके से हल किया जा सकता है।',
          '**शाब्दिक प्रश्न (Word Problems):** गणितीय मॉडलिंग की रीढ़ की हड्डी। उम्र वाले प्रश्नों में हमेशा वर्तमान आयु को $x$ और $y$ मान लें। गति वाले प्रश्नों में (Distance = Speed × Time) का उपयोग करें। दो अंकों की संख्या वाले प्रश्नों में संख्या $10x + y$ होती है।'
        ],
        hots: {
          question: 'ग्राफिकल विधि से युगपत समीकरणों को हल करें: $x + y = 5$ और $x - y = 1$. प्रतिच्छेदन बिंदु के निर्देशांक क्या हैं?',
          answer: '$x + y = 5$ के लिए निर्देशांक $(0,5), (5,0), (2,3)$ हो सकते हैं। $x - y = 1$ के लिए $(1,0), (0,-1), (3,2)$। ग्राफ पर, वे $(3, 2)$ पर प्रतिच्छेद करते हैं।'
        },
        eliteNotes: {
          mnemonic: 'क्रेमर का नियम: (Dx, Dy) = (Determinant_x, Determinant_y). याद रखें "वर्णमाला क्रम x पहले, y बाद में"।',
          commonMistakes: [
            'क्रेमर के नियम का उपयोग करने से पहले समीकरणों को ax + by = c रूप में न लिखना।',
            'समीकरण के दूसरी ओर पदों को ले जाते समय चिह्नों (+/-) को बदलना भूल जाना।',
            'ग्राफ के लिए केवल 2 बिंदुओं का उपयोग करना (त्रुटियों को पकड़ने के लिए हमेशा 3 का उपयोग करें!)।'
          ],
          proTip: 'शाब्दिक प्रश्नों में, यदि आपको आयु या गति का मान ऋणात्मक (Negative) मिलता है, तो रुकें! आपने समीकरणों में चिह्नों की गलती की है।'
        },
        ancientIndianContext: {
          scholar: 'भास्कराचार्य द्वितीय',
          era: '12वीं शताब्दी ईस्वी',
          contribution: 'अपने महान ग्रंथ "बीजगणित" में, भास्कराचार्य ने रैखिक और द्विघात समीकरणों को हल करने की उन्नत विधियाँ दी थीं, चरों (variables) को "वर्ण" (रंग) के रूप में संदर्भित किया था।'
        }
      },
      mr: {
        microConcept: 'ज्या समीकरणामुळे दोन चले (variables) वापरले जातात आणि चलाचा सर्वात मोठा घातांक 1 असतो, त्याला दोन चलांतील रेषीय समीकरण म्हणतात. हे एका सरळ रेषेचे समीकरण आहे.',
        visualization: 'ax + by + c = 0 \\quad (a \\neq 0, b \\neq 0)',
        pillars: [
          'बीजगणिताच्या पद्धती: चलांचा लोप (Elimination) करून उकल काढणे.',
          'आलेखाची पद्धत (Graphical Method): कमीत कमी 3 बिंदू (coordinates) स्थापन करून दोन रेषांचा छेदनबिंदू शोधणे.',
          'क्रेमरची पद्धत (Cramer\'s Rule): निश्चितकांचा (Determinants) वापर करून उकल शोधणे.',
          'उपयोजन (Application): शाब्दिक उदाहरणे (वय, वेग, काम) रेषीय समीकरणात मांडून सोडवणे.'
        ],
        detailedTheory: [
          '**रेषीय समीकरणाची संकल्पना:** दोन चले $x$ आणि $y$ असलेले रेषीय समीकरण आलेखावर एक सरळ रेषा दर्शवते. सामान्य रूप $ax + by + c = 0$ आहे. या रेषेवरील प्रत्येक बिंदूचे निर्देशक $(x, y)$ हे त्या समीकरणाची उकल असते.',
          '**एकसामायिक समीकरणे (Simultaneous Equations):** जेव्हा आपण दोन रेषीय समीकरणांचा एकाच वेळी विचार करतो, तेव्हा त्याला एकसामायिक समीकरणे म्हणतात. या दोन रेषा एकमेकांना ज्या एकाच बिंदूत छेदतात, ती त्या समीकरणांची उकल असते.',
          '**पद्धत १: चलाचा लोप करणे (Elimination):** ही सर्वात सामान्य पद्धत आहे. यात एका चलाचा लोप करण्यासाठी दोन्ही समीकरणांतील $x$ किंवा $y$ चे सहगुणक (coefficients) समान केले जातात आणि मग बेरीज किंवा वजाबाकी करून तो चल नाहीसा केला जातो.',
          '**पद्धत २: आलेख पद्धत (Graphical Method):** $2x - y = 4$ या समीकरणाचा आलेख काढण्यासाठी: $x$ च्या ३ सोप्या किंमती (उदा. $0, 1, 2$) ठरवून $y$ च्या किंमती शोधा. तुम्हाला $(0,-4), (1,-2)$ असे बिंदू मिळतील. ते आलेख कागदावर स्थापन करून रेषा काढा.',
          '**पद्धत ३: क्रेमरची पद्धत (Determinant Method):** क्रेमर नावाच्या स्विस गणितज्ञाने ही पद्धत शोधून काढली. $a_1x + b_1y = c_1$ च्या बाबतीत, प्रथम $D$ काढा. नंतर $x$ च्या ऐवजी $c_1, c_2$ ठेवून $D_x$ काढा. शेवटी $x = D_x/D$ आणि $y = D_y/D$ सूत्र वापरा.',
          '**रूपांतर करण्याजोगी समीकरणे:** काही समीकरणे सरळ रेषीय नसतात (उदा. $2/x + 3/y = 13$). अशा वेळी $1/x = m$ आणि $1/y = n$ असे मानून त्यांना रेषीय स्वरूपात रूपांतर करून सोडवता येते.',
          '**शाब्दिक उदाहरणे (Word Problems):** दैनंदिन आयुष्यातील प्रश्न सोडवण्यासाठी याचा खूप उपयोग होतो. वयाच्या उदाहरणांमध्ये नेहमी आजचे वय $x$ आणि $y$ मानावे. अंतराच्या उदाहरणांत (Distance = Speed × Time) हे सूत्र वापरावे.'
        ],
        hots: {
          question: 'पुढील एकसामायिक समीकरणे आलेखाने सोडवा: $x + y = 5$ आणि $x - y = 1$. छेदनबिंदूचे निर्देशक कोणते?',
          answer: '$x + y = 5$ साठी $(0,5), (5,0), (2,3)$ हे बिंदू आहेत. $x - y = 1$ साठी $(1,0), (0,-1), (3,2)$ हे बिंदू आहेत. आलेख कागदावर हे दोन्ही $(3, 2)$ या बिंदूत एकमेकांना छेदतात. हीच उकल आहे.'
        },
        eliteNotes: {
          mnemonic: 'क्रेमरची रीत: (Dx, Dy) = (Determinant_x, Determinant_y). लक्षात ठेवा "X आधी आणि Y नंतर".',
          commonMistakes: [
            'क्रेमरची पद्धत वापरण्यापूर्वी रेषीय समीकरणे ax + by = c या स्वरूपात न मांडणे.',
            'समीकरणाची बाजू बदलताना चिन्हांमध्ये (Signs) होणारी चूक.',
            'आलेखासाठी फक्त २ बिंदू वापरणे (चूक टाळण्यासाठी नेहमी ३ बिंदू वापरावेत!).'
          ],
          proTip: 'शाब्दिक उदाहरणांमध्ये जर वय किंवा वेग उणे (Negative) आला, तर तुमची समीकरणे पुन्हा तपासा, कारण ही मूल्ये कधीही उणे नसतात.'
        },
        ancientIndianContext: {
          scholar: 'भास्कराचार्य द्वितीय',
          era: '१२ वे शतक',
          contribution: 'त्यांच्या "बीजगणित" या ग्रंथात त्यांनी रेषीय आणि द्विघात समीकरणे सोडवण्याच्या प्रगत पद्धती दिल्या आहेत. त्यांनी चलांना "वर्ण" (colors) असे संबोधले होते.'
        }
      },
      gu: {
        microConcept: 'જે સમીકરણમાં બે ચલ હોય અને ચલની મહત્તમ ઘાત 1 હોય, તેને દ્વિચલ સુરેખ સમીકરણ કહેવાય છે. ભૌમિતિક રીતે, તે એક સિધી રેખા દર્શાવે છે.',
        visualization: 'ax + by + c = 0 \\quad (a \\neq 0, b \\neq 0)',
        pillars: [
          'બીજગણિતની પદ્ધતિઓ: લોપની રીત (Elimination) અને આદેશની રીત (Substitution) ની સમજૂતી.',
          'આલેખની રીત (Graphical Method): બે રેખાઓના છેદબિંદુ શોધવા માટે ઓછામાં ઓછા 3 બિંદુઓ (coordinates) મેળવવા.',
          'ક્રેમરનો નિયમ (Cramer\'s Rule): નિશ્ચાયક (Determinants) નો ઉપયોગ કરી સીધો ઉકેલ મેળવવો.',
          'ઉપયોગ (Application): વ્યવહારિક કોયડાઓ (ઉંમર, ઝડપ, કામ) ને સમીકરણોમાં દર્શાવી ઉકેલવા.'
        ],
        detailedTheory: [
          '**સુરેખ સમીકરણનો આધાર:** બે ચલ $x$ અને $y$ માં એક સુરેખ સમીકરણ આલેખ પર સિધી રેખા તરીકે દર્શાવાય છે. તેનું પ્રમાણિત સ્વરૂપ $ax + by + c = 0$ છે. આ રેખા પર જે પણ બિંદુ હોય તે $(x, y)$ સમીકરણનો ઉકેલ બને છે.',
          '**એકસામાયિક સમીકરણો (Simultaneous Equations):** જ્યારે આપણે બે દ્વિચલ સુરેખ સમીકરણો પર એકસાથે વિચાર કરીએ છીએ, ત્યારે તેને એકસામાયિક સમીકરણો કહેવાય છે. બે રેખાઓ જ્યાં છેદે છે તે બિંદુ જ તેમનો અજોડ ઉકેલ હોય છે.',
          '**પદ્ધતિ 1: લોપની રીત (Elimination Method):** સૌથી સામાન્ય પદ્ધતિ. તમે એક અથવા બંને સમીકરણોને યોગ્ય સંખ્યા વડે ગુણી શકો છો જેથી $x$ અથવા $y$ ના સહગુણકો (coefficients) સમાન થઈ જાય. પછી સરવાળો કે બાદબાકી કરી ચલનો લોપ કરી બીજો ચલ શોધો.',
          '**પદ્ધતિ 2: આલેખની રીત (Graphical Plotting):** $2x - y = 4$ નું આલેખન કરવા માટે: $y = 2x - 4$ મુજબ $x$ ની ત્રણ કિંમતો (જેમ કે 0, 1, 2) માટે અનુરૂપ કાંમતો શોધી $(0,-4), (1,-2)$ મેળવો અને આલેખપત્ર પર દર્શાવી રેખા દોરો.',
          '**પદ્ધતિ 3: ક્રેમરનો નિયમ (Determinant Method):** સ્વિસ ગણિતશાસ્ત્રી ગેબ્રિયલ ક્રેમરે આ નિયમ આપ્યો હતો. સમીકરણ $a_1x + b_1y = c_1$ માટે, સૌથી પહેલા $D$ મેળવો. પછી $x$ ની જગ્યાએ અચળ પદો મૂકી $D_x$ મેળવો. અંત માં $x = D_x/D$ અને $y = D_y/D$ સૂત્ર વાપરો.',
          '**પરિવર્તિત કરી શકાય તેવા સમીકરણો (Reducible Equations):** ક્યારેક સમીકરણો સુરેખ હોતા નથી (જેમ કે $2/x + 3/y = 13$). તેને ઉકેલવા માટે $1/x = m$ અને $1/y = n$ ધારી લેવાથી $2m + 3n = 13$ બની જશે, જેને સહેલાઈથી ઉકેલી શકાશે.',
          '**વ્યવહારિક કોયડાઓ (Word Problems):** ગણિતીય મોડલિંગનો પાયો. ઉંમરના પ્રશ્નોમાં હંમેશા વર્તમાન ઉંમરને $x$ અને $y$ ધારો. ઝડપ અને અંતરના કિસ્સામાં (Distance = Speed × Time) નો ઉપયોગ કરો.'
        ],
        hots: {
          question: 'આલેખની રીતથી ઉકેલ મેળવો: $x + y = 5$ અને $x - y = 1$ છે. છેદબિંદુના યામ (coordinates) શું હશે?',
          answer: '$x + y = 5$ માટે $(0,5), (5,0), (2,3)$ લઈ શકાય. $x - y = 1$ માટે $(1,0), (0,-1), (3,2)$ લઈ શકાય. આલેખપત્ર પર બંને રેખાઓ પ્રથમ ચરણમાં, યામ $(3, 2)$ પર બરાબર છેદે છે. તેથી ઉકેલ $(3, 2)$ મળશે.'
        }
      }
    }
  },
  'quadratic_equations': {
    microConcept: 'An equation with one variable where the highest index (degree) is 2. The solution yields up to two roots which mathematically represent the x-intercepts of a parabola.',
    visualization: 'ax^2 + bx + c = 0 \\quad (a \\neq 0)',
    pillars: [
      'Factorization Method: Splitting the middle term to find linear factors.',
      'Formula Method: Utilizing the quadratic formula and discriminants.',
      'Nature of Roots: Determining real & equal, real & unequal, or non-real roots using $\\Delta$.'
    ],
    detailedTheory: [
      '**The Concept of Roots:** The values of the variable which satisfy the given quadratic equation are called the roots of the equation. Geometrically, these are the points where the parabolic curve of the function crosses the x-axis.',
      '**Methods of Solution:** \n1. **Factorization:** The process of breaking down the polynomial into a product of simpler linear equations (e.g., $(x - a)(x - b) = 0$).\n2. **Completing the Square:** A methodical approach to convert the left side of the equation into a perfect square binomial.\n3. **Formula Method:** Directly applying the universal formula: *x = [-b ± √(b² - 4ac)] / 2a*.',
      '**Discriminant and Nature of Roots:** The value *Δ = b² - 4ac* is known as the discriminant.\n- If *Δ = 0*, the roots are real and equal.\n- If *Δ > 0*, the roots are real and unequal.\n- If *Δ < 0*, there are no real roots.',
      '**Relation between Roots and Coefficients:** If *α* and *β* are the roots, then their sum *(α + β) = -b/a*, and their product *(αβ) = c/a*.'
    ],
    hots: {
      question: 'If the roots of $x^2 + px + q = 0$ differ by 1, prove that $p^2 = 1 + 4q$.',
      answer: 'Let roots be $\\alpha$ and $\\alpha + 1$. Sum of roots: $2\\alpha + 1 = -p$. Product of roots: $\\alpha(\\alpha+1) = q$. Substitute $\\alpha = (-p-1)/2$ into the product equation to derive $p^2 = 1 + 4q$.'
    },
    eliteNotes: {
      mnemonic: 'Nature of roots with ∆: Positive = 2 Roots, Zero = 1 Same Root, Negative = No Real Roots.',
      commonMistakes: [
        'Making sign errors in -b ± √(b² - 4ac) / 2a.',
        'Ignoring zero possible cases when dividing by coefficients.',
        'Forgeting to take ± when square rooting.'
      ],
      proTip: 'Always check if the sum of coefficients a+b+c = 0. If it is, then 1 is always one of the roots!'
    },
    ancientIndianContext: {
      scholar: 'Brahmagupta',
      era: '7th Century CE',
      contribution: 'Brahmagupta was the first to give an explicit formula to solve quadratic equations of the form ax² + bx = c. His contribution is documented in the "Brahmasphutasiddhanta".'
    }
  },
  'arithmetic_progression': {
    microConcept: 'A sequence of numbers in which the difference between any two consecutive terms is constant. This difference is called the common difference (d).',
    visualization: 't_n = a + (n-1)d \\quad S_n = \\frac{n}{2}[2a + (n-1)d]',
    pillars: [
      'Identifying A.P.: Verifying that the difference between consecutive terms remains constant.',
      'Nth Term Formula ($t_n$): Finding a specific term deep within the sequence.',
      'Sum Formula ($S_n$): Calculating the aggregate sum of the first n terms of an A.P.'
    ],
    detailedTheory: [
      '**What is a Sequence?** A set of numbers arranged in a definite order, just like the natural numbers. In an Arithmetic Progression (A.P.), the arrangement follows a strict rule: the difference between any two consecutive terms is always constant.',
      '**Key Variables:** \n- **a (First Term):** The starting number of the sequence.\n- **d (Common Difference):** The constant value added to the previous term to get the next term (*d = tn - tn-1*).\n- **n (Position):** The position of a term in the sequence (must be a positive integer).',
      '**The $t_n$ Formula:** To find the value of a term at position *n* without writing out the entire sequence, we use the formula: *$t_n = a + (n - 1)d*$. This is incredibly useful for predicting future values in linear growth scenarios.',
      '**The Sum of an A.P. ($S_n$):** A famous story states that mathematician Carl Friedrich Gauss found the sum of numbers from 1 to 100 in mere seconds using this principle. The sum of the first *n* terms of an A.P. is calculated as: *$S_n = (n/2) \\times [2a + (n - 1)d]*$. Alternatively, if the first and last terms are known: *$S_n = (n/2) \\times (t_1 + t_n)*$.'
    ],
    hots: {
      question: 'The 11th term and the 21st term of an A.P. are 16 and 29 respectively. Find the 41st term.',
      answer: '$t_{11} = a + 10d = 16$. $t_{21} = a + 20d = 29$. Subtracting the equations: $10d = 13 \\Rightarrow d = 1.3$. From first equation: $a + 13 = 16 \\Rightarrow a = 3$. The 41st term $t_{41} = a + 40d = 3 + 40(1.3) = 3 + 52 = 55$.'
    }
  },
  'probability': {
    microConcept: 'The mathematical study of randomness and uncertainty. It measures the likelihood of a specific event occurring out of all possible outcomes.',
    visualization: 'P(A) = \\frac{\\text{Number of favorable outcomes n(A)}}{\\text{Total number of outcomes n(S)}}',
    pillars: [
      'Sample Space (S): Listing all possible exhaustive outcomes of a random experiment.',
      'Event (A): A specific outcome or set of outcomes we are measuring.',
      'Probability Formula: Calculating the ratio of favorable outcomes to total possible outcomes.'
    ],
    detailedTheory: [
      '**Random Experiments:** An experiment in which all possible results are known in advance but none of them can be predicted with certainty, and there is an equal possibility for each result. Examples include tossing a coin, rolling a die, or drawing a card from a well-shuffled pack.',
      '**Sample Space (S) & Sample Points:** The set of all possible outcomes of a random experiment. For example, when rolling a single die, the sample space is *S = {1, 2, 3, 4, 5, 6}*. The number of sample points is denoted as *n(S) = 6*. For two coins tossed simultaneously, *S = {HH, HT, TH, TT}* and *n(S) = 4*.',
      '**Events & Probability:** An event is a subset of the sample space. If we define Event A as "getting an even number on a die roll", then *A = {2, 4, 6}* and *n(A) = 3*. The mathematical probability of Event A occurring, denoted as *P(A)*, is the ratio of favorable outcomes to total outcomes. Thus, *P(A) = n(A) / n(S) = 3 / 6 = 1/2*.',
      '**Range of Probability:** The probability of any event always lies between 0 and 1 (inclusive). A probability of 0 indicates an impossible event (e.g., rolling a 7 on a standard die), while a probability of 1 indicates a certain event (e.g., rolling a number less than 7).'
    ],
    hots: {
      question: 'Two dice are rolled simultaneously. Find the probability that the sum of the digits on the upper faces is a prime number.',
      answer: 'Total outcomes n(S) = 36. Sums can be from 2 to 12. Prime sums: 2, 3, 5, 7, 11. Event A pairs: {(1,1), (1,2), (2,1), (1,4), (2,3), (3,2), (4,1), (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), (5,6), (6,5)}. Count n(A) = 15. P(A) = 15/36 = 5/12.'
    }
  },

  // ============================================================================
  // SCIENCE AND TECHNOLOGY PART 1
  // ============================================================================
  'gravitation': {
    microConcept: 'Gravitation is a universal attractive force operating between any two objects with mass. Sir Isaac Newton quantified this through his Universal Law of Gravitation.',
    visualization: 'F = \\frac{G m_1 m_2}{r^2}',
    pillars: [
      'Kepler\'s Laws: Understanding planetary motion mathematically.',
      'Universal Law of Gravitation: Exploring the inverse-square law relationship.',
      'Free Fall & Escape Velocity: Differentiating between weight and mass, and calculating terminal limits.'
    ],
    detailedTheory: [
      '**Historical Context (Kepler\'s Laws):** Before Newton formulated the Law of Gravitation, Johannes Kepler utilized Tycho Brahe\'s exact observational data to deduce three laws of planetary motion:\n1. **Law of Orbits:** The orbit of a planet is an ellipse with the Sun at one of the foci.\n2. **Law of Areas:** The line joining the planet and the Sun sweeps equal areas in equal intervals of time.\n3. **Law of Periods:** The square of the time period of revolution is directly proportional to the cube of the mean distance from the Sun (*T² ∝ r³*).',
      '**Newton\'s Universal Law:** Inspired by Kepler\'s Third Law, Newton deduced the Inverse Square Law of Gravitation. The force of attraction between two bodies is directly proportional to the product of their masses (*m1, m2*) and inversely proportional to the square of the distance between their centers (*r²*). The constant of proportionality, *G*, is the Universal Gravitational Constant ($6.67 \\times 10^{-11} Nm^2/kg^2$).',
      '**Earth\'s Gravitational Acceleration (g):** The acceleration produced in a body due to the gravitational force of the Earth is denoted by *g* ($9.8 m/s^2$ on average). Its value changes with altitude, depth, and latitude (highest at the poles, lowest at the equator).',
      '**Mass vs. Weight & Free Fall:** Mass is the amount of matter in an object (constant everywhere). Weight is the gravitational force acting on it (*W = mg*), which changes based on planetary bodies (e.g., weight on the Moon is ~1/6th of Earth). Free fall occurs when an object fals solely under the influence of gravity without air resistance.'
    ],
    hots: {
      question: 'An object takes 5s to reach the ground from a height of 5m on a planet. What is the value of g on that planet?',
      answer: 'Initial velocity u = 0, displacement s = 5m, time t = 5s. Using Newton\'s second equation of motion: $s = ut + (1/2)gt^2$. Thus, $5 = 0 + (1/2) \\times g \\times 25 \\Rightarrow g = 10/25 = 0.4 m/s^2$.'
    },
    eliteNotes: {
      mnemonic: 'Kepler\'s Third Law: "Planets Square their Time to Cube their Distance" (T² ∝ r³).',
      commonMistakes: [
        'Confusing G (Universal Constant) with g (Acceleration due to gravity).',
        'Not converting mass to kg and distance to meters in calculations.',
        'Assuming g is constant at all altitudes.'
      ],
      proTip: 'In free-fall problems, if air resistance is ignored, acceleration is *always* 9.8 m/s² down, regardless of weight!'
    },
    ancientIndianContext: {
      scholar: 'Bhaskaracharya II',
      era: '12th Century CE',
      contribution: 'In "Siddhanta Shiromani", he mentions the property of "Bhu-Akarshan" (Earth\'s attraction), describing how objects fall to earth naturally, centuries before modern gravity was quantified.'
    }
  },
  'periodic_classification_of_elements': {
    microConcept: 'The organization of chemical elements in order of their increasing atomic numbers, arranged in groups and periods to reveal repeating trends in their properties.',
    visualization: 's, p, d, f \\text{ blocks } \\rightarrow \\text{ Periodic Trends (Valency, Atomic Size)}',
    pillars: [
      'Dobereiner\'s Triads & Newlands\' Octaves: Early historical attempts at classification.',
      'Mendeleev\'s Periodic Table: Organizing by atomic mass and predicting unknown elements.',
      'Modern Periodic Table: Organizing by atomic number (Moseley) and exploring modern trends (electronegativity).'
    ],
    detailedTheory: [
      '**Early Attempts at Classification:** As more elements were discovered, scientists sought patterns to study them systematically. **Dobereiner** formed "triads" where the middle element\'s mass was roughly the average of the other two. **Newlands** proposed the "Law of Octaves", noting that every eighth element shared properties, similar to musical notes, but this failed beyond Calcium.',
      '**Mendeleev\'s Masterpiece:** Dmitri Mendeleev organized elements based on increasing atomic mass and chemical properties. His genius lay in leaving blank spaces for undiscovered elements (like Eka-boron, Eka-aluminum, and Eka-silicon, which were later discovered as Scandium, Gallium, and Germanium) and accurately predicting their properties.',
      '**The Modern Periodic Law:** Henry Moseley proved that atomic number (number of protons) is a more fundamental property than atomic mass. The Modern Periodic Law states: "Properties of elements are a periodic function of their atomic numbers." The table is divided into 18 vertical columns (groups) and 7 horizontal rows (periods).',
      '**Periodic Trends:** Moving across a period (left to right), atomic size decreases due to an increase in effective nuclear charge, and non-metallic character increases. Moving down a group (top to bottom), atomic size increases due to the addition of new electron shells, and metallic character increases.'
    ],
    hots: {
      question: 'An element X has mass number 35 and atomic number 17. To which group and period does it belong, and what is its valency?',
      answer: 'Atomic number is 17. Electronic configuration is 2, 8, 7. It has 3 shells, so it belongs to Period 3. It has 7 valence electrons, so it belongs to Group 17 (Halogens). It needs 1 electron to complete its octet, so its valency is 1. (The element is Chlorine).'
    }
  },
  'chemical_reactions_and_equations': {
    microConcept: 'Chemical reactions involve the breaking of existing bonds and the formation of new bonds between atoms. They are universally represented by balanced chemical equations.',
    visualization: '2H_2 + O_2 \\rightarrow 2H_2O \\quad (\\text{Conservation of Mass})',
    pillars: [
      'Balancing Equations: Ensuring the number of atoms for each element is equal on both sides.',
      'Types of Reactions: Combination, Decomposition, Displacement, and Double Displacement.',
      'Redox Reactions: Oxidation (loss of electrons/gain of oxygen) vs. Reduction (gain of electrons/loss of oxygen).'
    ],
    detailedTheory: [
      '**Writing and Balancing Equations:** A chemical equation is a shorthand representation of a chemical reaction using symbols and formulas. According to the Law of Conservation of Mass, matter cannot be created or destroyed. Therefore, the number of atoms of each element must remain the same before and after the reaction. The process of making the number of atoms equal on both sides is called balancing.',
      '**Understanding Reaction Types:** \n1. **Combination:** Two or more reactants combine to form a single product (e.g., $C + O_2 \\rightarrow CO_2$).\n2. **Decomposition:** A single reactant breaks down into two or more products, often requiring heat (thermal), light (photo), or electricity (electrolytic).\n3. **Displacement:** A more reactive element displaces a less reactive element from its compound ($Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$).\n4. **Double Displacement:** Ions are exchanged between two reactants to form new compounds, often resulting in a precipitate.',
      '**Oxidation and Reduction (Redox):** Oxidation involves the addition of oxygen or the removal of hydrogen (or the loss of electrons). Reduction involves the addition of hydrogen or the removal of oxygen (or the gain of electrons). When both processes occur simultaneously, it is a Redox reaction. The substance providing oxygen is the oxidizing agent, and the substance providing hydrogen is the reducing agent.',
      '**Corrosion and Rancidity:** Corrosion is the gradual degradation of metals due to air and moisture (e.g., rusting of iron, which forms hydrated iron oxide). Rancidity is the oxidation of fats and oils in food, leading to a foul smell and taste, which can be prevented by adding antioxidants or flushing bags with nitrogen gas.'
    ],
    hots: {
      question: 'Why is hydrogen peroxide kept in coloured bottles?',
      answer: 'Hydrogen peroxide ($H_2O_2$) undergoes photo-chemical decomposition in the presence of light to form water and oxygen gas. Coloured/dark bottles cut off light entry, preventing the decomposition of the chemical.'
    }
  },

  // ============================================================================
  // GEOGRAPHY
  // ============================================================================
  'field_visit': {
    microConcept: 'A field visit is an effective pedagogical method in geography used to gather primary geographical, cultural, and socio-economic information directly through observation.',
    visualization: 'Observation \\rightarrow Data Collection \\rightarrow Report Writing',
    pillars: [
      'Preparation: Defining the objective, selecting the location, and preparing a questionnaire.',
      'Precautions: Carrying essentials (first-aid, maps), respecting local culture, and maintaining safety.',
      'Report Writing: Synthesizing facts, photographs, maps, and conclusions into a structured document.'
    ],
    detailedTheory: [
      '**The Importance of Field Visits:** Geography is an empirical science. While textbooks provide the theoretical framework, field visits provide firsthand experience. They help students understand the intricate relationship between humanity and the environment (e.g., observing how settlements adapt to the topography of the Sahyadris).',
      '**Pre-Visit Preparations:** Organizing a successful field visit requires meticulous planning. This involves selecting a location aligned with the learning objective (e.g., a coastal region to study erosion or a factory to study secondary occupations), obtaining necessary permissions, preparing a route map, and creating a structured questionnaire to extract information from locals or factory managers.',
      '**Data Collection Techniques:** During the visit, students must actively observe landforms, vegetation, soil types, housing patterns, and agricultural practices. Data is collected through direct interviews (using the questionnaire), sketching local topography, taking representative photographs, and noting GPS coordinates.',
      '**Report Writing:** Field activities culminate with the submission of a Field Report. A standard MSBSHSE field report includes an Introduction, Location & Route Map, Geographical/Historical Features observed, socio-economic analysis, Conclusions, and Acknowledgments.'
    ],
    hots: {
      question: 'Design a 4-question interview schedule you would use to gather information from a factory owner during a field visit.',
      answer: '1. In which year was this factory established, and why was this specific location chosen? 2. From where do you procure your raw materials, and how is the transportation managed? 3. What measures are undertaken by the factory to control environmental pollution? 4. What is the total number of employees, and what welfare schemes are provided for them?'
    }
  },
  'location_and_extent': {
    microConcept: 'A comparative spatial analysis of two major contrasting economies from the Global South: The Republic of India and the Federative Republic of Brazil.',
    visualization: 'India: (8^\\circ 4\' N \\text{ to } 37^\\circ 6\' N) \\quad Brazil: (5^\\circ 15\' N \\text{ to } 33^\\circ 45\' S)',
    pillars: [
      'Latitudinal & Longitudinal Extent: Understanding exact geographic positioning on the globe.',
      'Neighboring Nations & Oceans: Mapping political boundaries and maritime access.',
      'Historical Background: Comparing a century of British rule in India versus Portuguese rule in Brazil.'
    ],
    detailedTheory: [
      '**Geographical Context of India:** India is located in the Northern and Eastern hemispheres of the Earth. It occupies the southern part of the Asian continent. Its latitudinal extent stretches from 8°4\' N to 37°6\' N, and longitudinal extent from 68°7\' E to 97°25\' E. The southernmost tip isn\'t Kanyakumari, but Indira Point (6°45\' N) in the Andaman and Nicobar Islands.',
      '**Geographical Context of Brazil:** Brazil is the largest country in South America. While some part of it lies in the Northern Hemisphere, the majority lies in the Southern Hemisphere. Its latitudinal extent spans across the Equator from 5°15\' N to 33°45\' S, leading to a massive variation in climate from north to south. It is situated entirely in the Western Hemisphere.',
      '**Historical and Socio-Economic Parallels:** Both nations share histories of colonization but by different powers. India was under British rule for nearly one and a half centuries until 1947. Brazil was under Portuguese rule for over three centuries until 1822 and subsequently faced over 50 years of populist military governance. Today, both are recognized as major emerging global markets and strategic members of the BRICS nations.',
      '**Neighboring Countries:** India shares land borders with Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, and Myanmar. Brazil shares borders with almost every South American nation (except Chile and Ecuador), including French Guiana, Suriname, Guyana, Venezuela, Colombia, Peru, Bolivia, Paraguay, Argentina, and Uruguay.'
    ],
    hots: {
      question: 'Which distinct imaginary latitude lines pass through India and Brazil, and how do they impact the foundational climate of both nations?',
      answer: 'The Tropic of Cancer (23.5 N) passes almost through the middle of India, dividing it into tropical and subtropical climate zones. For Brazil, the Equator (0) passes through its northern part, ensuring a heavy, hot-wet equatorial climate in the Amazon basin, while the Tropic of Capricorn (23.5 S) passes through its southern part, leading to a temperate climate in the extreme south.'
    }
  },

  // ============================================================================
  // LANGUAGES (ENGLISH, HINDI, MARATHI)
  // ============================================================================
  'a_teenagers_prayer': {
    microConcept: 'A heartfelt poem by J. Morse where a teenager speaks to God, seeking guidance and clarity to navigate the most crucial and transformative years of life.',
    visualization: 'Stanza \\rightarrow Rhyme Scheme (abcb) \\rightarrow Figure of Speech (Apostrophe/Inversion)',
    pillars: [
      'Theme & Central Idea: Navigating the temptations and choices of adolescence.',
      'Figures of Speech: Identifying Apostrophe, Metaphor, and Alliteration.',
      'Poetic Appreciation: Structuring a 5-mark appreciation paragraph for the Board exams.'
    ],
    detailedTheory: [
      '**The Poet\'s Intent:** J. Morse addresses the immense pressure modern teenagers face. The poem is essentially an invocation—a sincere prayer asking the Creator to hold their hand precisely because they are at the crossroads of childhood and adulthood. The decisions they make now will shape their entire adult life.',
      '**Key Stanza Breakdown:** The poem begins with "Each day brings new beginnings / Decisions I must make." The teenager acknowledges their absolute autonomy but also the terrifying reality that they are the sole "captain" of their life\'s journey. They pray to be kept away from "temptation," which symbolizes bad habits, negative peer pressure, and self-destructive choices.',
      '**Poetic Devices & Language:** The poem is structured in simple yet powerful language to reflect a teenager\'s raw emotion. The primary Figure of Speech is **Apostrophe**—since the poet is talking directly to an abstract entity (God) who is not physically present ("Please open up my eyes, dear Lord"). We also see **Metaphor** in "travel down the darkened road," where the dark road symbolizes a life of crime or moral failure.',
      '**Writing the Appreciation (5 Marks):** For the MSBSHSE board exam, appreciation must include: Title, Author, Rhyme Scheme (which is a-b-c-b in this poem), Figure of Speech, and the Central Idea. Your central idea must state: "The poem is about a teenager’s dilemma in making the right choices and their plea to God for moral guidance to lead a clean, healthy life."'
    ],
    hots: {
      question: 'Write a short personal response: Do you think today\'s teenagers face more "darkened roads" (temptations) than previous generations?',
      answer: 'Yes, because of the digital age. While physical temptations existed before, today\'s teenagers are constantly exposed to cyberbullying, unrealistic comparisons on social media, and digital addiction, making the "darkened road" much closer and easier to slip down without immediate adult supervision.'
    }
  },
  'bharat_mahima': {
    microConcept: 'A patriotic poem (kavita) by Jaishankar Prasad glorifying India’s ancient heritage, culture, and its historic role as a beacon of knowledge (Vedas) for the entire world.',
    visualization: 'ज्ञान (Knowledge) \\rightarrow वीरता (Bravery) \\rightarrow त्याग (Sacrifice) \\rightarrow शांति (Peace)',
    pillars: [
      'Central Theme: Patriotism (Deshprem) and pride in India\'s historical benevolence.',
      'Vocabulary Expansion: Understanding pure Hindi (Tatsam) words like Vyomtom (Darkness) and Shrut (Vedas).',
      'Interpretation: Explaining verses in simple Hindi (Bhavarth) for the 2-mark analysis questions.'
    ],
    detailedTheory: [
      '**Introduction to the Poem:** Written by the legendary Chhayavadi poet Jaishankar Prasad, "Bharat Mahima" (The Glory of India) highlights that India is not just a piece of land, but an ancient civilization that awoke the rest of the world from the slumber of ignorance. The poet compares the Himalayas to a welcoming courtyard bathed in the morning sunlight.',
      '**Awakening the World (Jagran):** A critical stanza reads: "जगे हम, लगे जगाने विश्व, लोक में फैला फिर आलोक।" This means that Indians were the first to awaken (achieve enlightenment and knowledge), and instead of keeping it to themselves, they selflessly spread the light of knowledge (Alok) across the globe, destroying the darkness of ignorance.',
      '**The Indian Character:** The poet highlights that India has never been an aggressor ("किसी का हमने छीना नहीं"). India\'s strength has always been in Daan (Charity), Tyag (Sacrifice), and Atithi Devo Bhava (treating guests as Gods). Even when Indian emperors conquered lands, it was through the message of peace (like Emperor Ashoka spreading Buddhism), not through violent greed.',
      '**Exam Preparation (Bhavarth):** Students are frequently asked to explain the line: "चरित थे पूत, भुजा में शक्ति, नम्रता रही सदा संपन्न।" Meaning: Our character was always pure (poot), our arms possessed immense physical strength (shakti), yet we were always rich in politeness and humility (namrata). True power in Indian culture is always accompanied by restraint.'
    ],
    hots: {
      question: 'कविता के आधार पर सिद्ध कीजिए कि भारतीय संस्कृति में "अतिथि" को देवता के समान माना गया है। (Prove based on the poem that Indian culture treats guests as Gods).',
      answer: 'कवि जयशंकर प्रसाद जी लिखते हैं, "अतिथि थे हमारे देव।" भारत के इतिहास में ऐसे कई उदाहरण हैं जहाँ भारतीयों ने अपने अतिथियों या शरणार्थियों के सम्मान और रक्षा के लिए अपना सर्वस्व न्योछावर कर दिया। यह पंक्ति सिद्ध करती है कि हमारी संस्कृति में स्वार्थ से ऊपर सत्कार को स्थान दिया गया है।'
    }
  },
  'tuze_isaa_vitha': {
    microConcept: 'An iconic Abhang (devotional poetry) by Sant Tukaram Maharaj reflecting pure devotion (Bhakti), selflessness, and an intense longing for a spiritual connection with Lord Vitthal.',
    visualization: 'अभंग (Abhang) \\rightarrow भक्ती (Devotion) \\rightarrow विठ्ठल दर्शन (Divine Vision)',
    pillars: [
      'Abhang Structure: Understanding the meter and rhythmic composition typical of Maharashtrian Varkari poetry.',
      'Metaphorical Meaning: Analyzing the relationship between the devotee (Chakor) and the Lord (Moon).',
      'Kavyasaundarya: Exploring poetic beauty and writing answers reflecting Sant Tukaram\'s philosophical depth.'
    ],
    detailedTheory: [
      '**The Essence of the Abhang:** In "Tuze Isaa Vitha," Sant Tukaram Maharaj expresses an overwhelming, intense thirst for the continuous vision (Darshan) of Lord Vitthal. The central theme revolves around the idea that for a true devotee, worldly possessions and physical comforts are meaningless compared to the spiritual bliss of divine presence.',
      '**Powerful Metaphors Used:** Sant Tukaram employs beautiful analogies from nature to explain his mental state. For instance, he compares himself to the mythological **Chakor bird**, which is believed to survive only by drinking the moonlight. Just as the Chakor desperately waits for the moon, Tukaram Maharaj waits for Lord Vitthal\'s divine face. He also compares his longing to a young girl (Lekur) waiting for her mother.',
      '**Philosophical Underpinnings:** The poem belongs to the Bhakti movement, which heavily emphasized egalitarianism and direct emotional connection over rigid rituals. Tukaram states that his mind is so fixated on the Lord that fasting, rituals, or social status no longer matter. His only "Vrat" (vow) is chanting the Lord\'s name.',
      '**Board Exam Perspective (Kritiyukta Abhyas):** You must prepare for the "Rasagrahan" (Appreciation) question. Key points: The poet is Sant Tukaram Maharaj. The poetic format is Abhang. The distinct feature is the "Drushtant" (analogy) Alankar. The core message is that true devotion does not demand material wealth, only the purity of heart to see God everywhere.'
    ],
    hots: {
      question: 'संत तुकाराम महाराजांनी विठ्ठलाच्या भेटीची ओढ व्यक्त करण्यासाठी कोणत्या दृष्टान्तांचा वापर केला आहे? (Which analogies has Sant Tukaram used to express his longing for meeting Vitthal?)',
      answer: 'संत तुकाराम महाराजांनी विठ्ठलाच्या भेटीची ओढ व्यक्त करण्यासाठी प्रामुख्याने चकोर पक्षी आणि चंद्राचा दृष्टान्त दिला आहे. ज्याप्रमाणे चकोर पक्षी फक्त चंद्रकिरण पिऊन जगतो आणि चंद्राची आतुरतेने वाट पाहतो, त्याचप्रमाणे स्वतःला चकोर मानून संत तुकाराम विठ्ठलरूपी चंद्राची वाट पाहत आहेत. तसेच भुकेल्या बाळ ज्याप्रमाणे आईची वाट पाहतो, तशीच ओढ त्यांना लागली आहे.'
    }
  }
};

/**
 * Fetch detailed MSBSHSE Subject Offline content
 */
export function getMSBSHSE10Content(chapterId: string): DeepSovereignContent | null {
  const normalizedId = chapterId.toLowerCase().replace(/^\d+\.\s*/, '').replace(/\s+/g, '_');
  
  // Exact match
  if (MSBSHSE_10_REGISTRY[normalizedId]) return MSBSHSE_10_REGISTRY[normalizedId];

  // Fuzzy Match (handles slight string formatting differences)
  const match = Object.keys(MSBSHSE_10_REGISTRY).find(key => 
    normalizedId.includes(key) || key.includes(normalizedId)
  );

  return match ? MSBSHSE_10_REGISTRY[match] : null;
}
