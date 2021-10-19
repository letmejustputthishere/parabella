<script lang="ts">
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import Question from "../components/Question.svelte";
    import { topFunction } from "../utils/scrollToTop";

    export let language: string;
    export let answers: number[][];

    onMount(() => {
        window.document.body.className = "survey";
    });

    let index = 0;

    let headers = [
        "Digital Enablement",
        "Source to Pay",
        "Plan to Produce",
        "Order to Cash",
        "1. No poverty",
        "2. No hunger",
        "3. Health and well-being",
        "4. High quality education",
        "5. Gender equality",
        "6. Clean water and sanitation",
        "7. Affordable and clean energy",
        "8. Decent work and economic growth",
        "9. Industry, innovation and infrastructure",
        "10. Fewer inequalities",
        "11. Sustainable cities and communities",
        "12. Responsible consumption and production patterns",
        "13. Measures for climate protection",
        "14. Life underwater",
        "15. Life on land",
        "16. Peace, justice and strong institutions",
        "17. Partnerships to achieve the goals",
    ];

    let questions = {
        german: [
            // enablement
            [
                "Unser Unternehmen hat eine klare und verständliche Digitalisierungsstrategie.",
                "Mitarbeiter werden für Weiterbildung im Bereich Digialisierung gefördert.",
                "Geschäftsprozesse und ihre Daten werden zwischen den Geschäftseinheiten und Betrieben gründlich harmonisiert.",
                "Digitalisierungsvorhaben werden mithilfe von Portfoliomanagement auf Kosten-Nutzen und strategische Eignung priorisiert.",
                "Die Verantwortung und Umsetzung digitaler Initiativen sind klar definiert.",
                "Funktionsübergreifende Teamarbeit ist für das Unternehmen sehr wichtig.",
                "Unser Unternehmen verfügt über die Fähigkeiten auf interne und externe Veränderungen rasch zu reagieren.",
                "Unsere Mitarbeitenden werden mit digitalen Technologien vertraut gemacht und befähigt.",
                "Die Digitalisierung ist ein laufendes strategisches Projekt im gesamten Unternehmen, das stetig kommuniziert wird.",
            ],
            // technology
            // stp
            [
                "Cloud-basierten Geschäftsnetzes für direkte und indirekte elektronische Beschaffungen.",
                "Digitale Lieferantenmanagement-Plattform zur Förderung der Zusammenarbeit.",
                "Fortschrittliches Vertragsverwaltungstool das mit Lieferanten verbundenes  ist.",
                "Plattform für das Ausgabenmanagement mit Analysefunktionen.",
                "RPA-Technologie (robotergestützte Prozessautomatisierung) zur Automatisierung von Beschaffungs- und Zahlungsprozessen.",
                "Künstliche Intelligenz / maschinelles Lernen / Predictive Analytik zur Optimierung von Source-to-Pay-Prozessen.",
                "In ERP integriertes Transportmanagementsystem zur Optimierung eingehender Transporte.",
                "Vorausschauende Berechnung der Ankunftszeit für eingehende Lieferungen (ETA):",
                "In ERP und in WHM integriertes Material flow system. ",
                "Infrastruktur/Plattform für das Internet der Dinge (IoT) .",
            ],
            // ptp
            [
                "Sales & Operations Planning (S&OP) Systems.",
                "Integriertes Bedarfserfassungs-/Planungssystem.",
                "Integriertes System zur Angebotsplanung.",
                "Erweitertes Produktionsplanungssystem ist implementiert und in das ERP-System integriert.",
                "Manufacturing Execution System (MES) ist implementiert und in das ERP-System integriert.",
                "Papierlose Cockpits auf Fertigungsebene.",
                "Maschine-zu-Maschine-Kommunikation.",
                "Infrastruktur/Plattform für das Internet der Dinge (IoT) .",
                "Automatisch geführte Fahrzeuge / fahrerlose Materialtransportsysteme.",
                "Robotik-Prozessautomatisierung (RPA) zur Automatisierung von Plan to Produce-Prozessen.",
                "Künstliche Intelligenz / maschinelles Lernen / Predictive Analytik zur Optimierung von Plan to Produce -Prozessen.",
            ],
            // otc
            [
                "CRM System verbunden zum ERP-System",
                "Chatbots zur Verwaltung von Kundenanfragen.",
                "Robotik-Prozessautomatisierung  (RPA) zur Unterstützung von Order to Cash-Prozessen.",
                "Künstliche Intelligenz/Maschinelles Lernen zur Optimierung von Order-to-Cash-Prozessen.",
                "Warehouse Management System verbunden zum ERP-System.Hands-free picking (Pick by voice/light, augmented reality).",
                "Hands-free picking (Pick by voice/light, augmented reality).",
                "Infrastruktur / Plattform für das Internet der Dinge (IoT).",
                "Digitaler Zwilling des Auslieferungslagers.",
                "Transportmanagementsystem verbunden zum ERP-System. ",
                "Plattform für ausgehende Transporte.",
            ],
            // SDG
            // no poverty
            [
                "Bis 2030 sicherstellen, dass alle Männer und Frauen, insbesondere die Armen und Schwachen, die gleichen Rechte auf wirtschaftliche Ressourcen sowie Zugang zu grundlegenden Diensten, Grundeigentum und Verfügungsgewalt über Grund und Boden und sonstigen Vermögensformen, Erbschaften, natürlichen Ressourcen, geeigneten neuen Technologien und Finanzdienstleistungen einschließlich Mikrofinanzierung haben",
                "Auf nationaler, regionaler und internationaler Ebene solide politische Rahmen auf der Grundlage armutsorientierter und geschlechtersensibler Entwicklungsstrategien schaffen, um beschleunigte Investitionen in Maßnahmen zur Beseitigung der Armut zu unterstützen",
            ],
            // no hunger
            [
                "Bis 2030 den Hunger beenden und sicherstellen, dass alle Menschen, insbesondere die Armen und Menschen in prekären Situationen, einschließlich Kleinkindern, ganzjährig Zugang zu sicheren, nährstoffreichen und ausreichenden Nahrungsmitteln haben",
                "Bis 2030 die Nachhaltigkeit der Systeme der Nahrungsmittelproduktion sicherstellen und resiliente landwirtschaftliche Methoden anwenden, die die Produktivität und den Ertrag steigern, zur Erhaltung der Ökosysteme beitragen, die Anpassungsfähigkeit an Klimaänderungen, extreme Wetterereignisse, Dürren, Überschwemmungen und andere Katastrophen erhöhen und die Flächen- und Bodenqualität schrittweise verbessern",
            ],
            // health and well-being
            [
                "Die allgemeine Gesundheitsversorgung, einschließlich der Absicherung gegen finanzielle Risiken, den Zugang zu hochwertigen grundlegenden Gesundheitsdiensten und den Zugang zu sicheren, wirksamen, hochwertigen und bezahlbaren unentbehrlichen Arzneimitteln und Impfstoffen für alle erreichen",
                "Bis 2030 die Zahl der Todesfälle und Erkrankungen aufgrund gefährlicher Chemikalien und der Verschmutzung und Verunreinigung von Luft, Wasser und Boden erheblich verringern",
            ],
            // high quality education
            [
                "Bis 2030 die Zahl der Jugendlichen und Erwachsenen wesentlich erhöhen, die über die entsprechenden Qualifikationen einschließlich fachlicher und beruflicher Qualifikationen für eine Beschäftigung, eine menschenwürdige Arbeit und Unternehmertum verfügen",
                "Bildungseinrichtungen bauen und ausbauen, die kinder-, behinderten- und geschlechtergerecht sind und eine sichere, gewaltfreie, inklusive und effektive Lernumgebung für alle bieten",
            ],
            // gender equality
            [
                "Alle Formen der Diskriminierung von Frauen und Mädchen überall auf der Welt beenden",
                "Die volle und wirksame Teilhabe von Frauen und ihre Chancengleichheit bei der Übernahme von Führungsrollen auf allen Ebenen der Entscheidungsfindung im politischen, wirtschaftlichen und öffentlichen Leben sicherstellen",
            ],
            // clean water and sanitation
            [
                "Bis 2030 die Wasserqualität durch Verringerung der Verschmutzung, Beendigung des Einbringens und Minimierung der Freisetzung gefährlicher Chemikalien und Stoffe, Halbierung des Anteils unbehandelten Abwassers und eine beträchtliche Steigerung der Wiederaufbereitung und gefahrlosen Wiederverwendung weltweit verbessern",
                "Bis 2030 die Effizienz der Wassernutzung in allen Sektoren wesentlich steigern und eine nachhaltige Entnahme und Bereitstellung von Süßwasser gewährleisten, um der Wasserknappheit zu begegnen und die Zahl der unter Wasserknappheit leidenden Menschen erheblich zu verringern",
            ],
            // affordable and clean energy
            [
                "Bis 2030 den Anteil erneuerbarer Energie am globalen Energiemix deutlich erhöhen",
                "Bis 2030 die internationale Zusammenarbeit verstärken, um den Zugang zur Forschung und Technologie im Bereich saubere Energie, namentlich erneuerbare Energie, Energieeffizienz sowie fortschrittliche und saubere Technologien für fossile Brennstoffe, zu erleichtern, und Investitionen in die Energieinfrastruktur und saubere Energietechnologien fördern",
            ],
            // Decent work and economic growth
            [
                "Eine höhere wirtschaftliche Produktivität durch Diversifizierung, technologische Modernisierung und Innovation erreichen, einschließlich durch Konzentration auf mit hoher Wertschöpfung verbundene und arbeitsintensive Sektoren",
                "Entwicklungsorientierte Politiken fördern, die produktive Tätigkeiten, die Schaffung menschenwürdiger Arbeitsplätze, Unternehmertum, Kreativität und Innovation unterstützen, und die Formalisierung und das Wachstum von Kleinst-, Klein- und Mittelunternehmen unter anderem durch den Zugang zu Finanzdienstleistungen begünstigen",
                "Bis 2030 produktive Vollbeschäftigung und menschenwürdige Arbeit für alle Frauen und Männer, einschließlich junger Menschen und Menschen mit Behinderungen, sowie gleiches Entgelt für gleichwertige Arbeit erreichen",
                "Sofortige und wirksame Maßnahmen ergreifen, um Zwangsarbeit abzuschaffen, moderne Sklaverei und Menschenhandel zu beenden und das Verbot und die Beseitigung der schlimmsten Formen der Kinderarbeit, einschließlich der Einziehung und des Einsatzes von Kindersoldaten, sicherstellen und bis 2025 jeder Form von Kinderarbeit ein Ende setzen",
                "Die Arbeitsrechte schützen und sichere Arbeitsumgebungen für alle Arbeitnehmer, einschließlich der Wanderarbeitnehmer, insbesondere der Wanderarbeitnehmerinnen, und der Menschen in prekären Beschäftigungsverhältnissen, fördern",
            ],
            // Industry, innovation and infrastructure
            [
                "Eine hochwertige, verlässliche, nachhaltige und widerstandsfähige Infrastruktur aufbauen, einschließlich regionaler und grenzüberschreitender Infrastruktur, um die wirtschaftliche Entwicklung und das menschliche Wohlergehen zu unterstützen, und dabei den Schwerpunkt auf einen erschwinglichen und gleichberechtigten Zugang für alle legen",
                "Insbesondere in den Entwicklungsländern den Zugang kleiner Industrie- und anderer Unternehmen zu Finanzdienstleistungen, einschließlich bezahlbaren Krediten, und ihre Einbindung in Wertschöpfungsketten und Märkte erhöhen",
                "Bis 2030 die Infrastruktur modernisieren und die Industrien nachrüsten, um sie nachhaltig zu machen, mit effizienterem Ressourceneinsatz und unter vermehrter Nutzung sauberer und umweltverträglicher Technologien und Industrieprozesse, wobei alle Länder Maßnahmen entsprechend ihren jeweiligen Kapazitäten ergreifen",
            ],
            // Fewer inequalities
            [
                "Bis 2030 die Infrastruktur modernisieren und die Industrien nachrüsten, um sie nachhaltig zu machen, mit effizienterem Ressourceneinsatz und unter vermehrter Nutzung sauberer und umweltverträglicher Technologien und Industrieprozesse, wobei alle Länder Maßnahmen entsprechend ihren jeweiligen Kapazitäten ergreifen",
                "Chancengleichheit gewährleisten und Ungleichheit der Ergebnisse reduzieren, namentlich durch die Abschaffung diskriminierender Gesetze, Politiken und Praktiken und die Förderung geeigneter gesetzgeberischer, politischer und sonstiger Maßnahmen in dieser Hinsicht",
            ],
            // Sustainable cities and communities
            [
                "Bis 2030 den Zugang zu sicheren, bezahlbaren, zugänglichen und nachhaltigen Verkehrssystemen für alle ermöglichen und die Sicherheit im Straßenverkehr verbessern, insbesondere durch den Ausbau des öffentlichen Verkehrs, mit besonderem Augenmerk auf den Bedürfnissen von Menschen in prekären Situationen, Frauen, Kindern, Menschen mit Behinderungen und älteren Menschen",
                "Bis 2030 die von den Städten ausgehende Umweltbelastung pro Kopf senken, unter anderem mit besonderer Aufmerksamkeit auf der Luftqualität und der kommunalen und sonstigen Abfallbehandlung",
            ],
            // Responsible consumption and production patterns
            [
                "Bis 2030 die nachhaltige Bewirtschaftung und effiziente Nutzung der natürlichen Ressourcen erreichen",
                "Bis 2030 das Abfallaufkommen durch Vermeidung, Verminderung, Wiederverwertung und Wiederverwendung deutlich verringern",
                "Die Unternehmen, insbesondere große und transnationale Unternehmen, dazu ermutigen, nachhaltige Verfahren einzuführen und in ihre Berichterstattung Nachhaltigkeitsinformationen aufzunehmen",
                "Bis 2030 sicherstellen, dass die Menschen überall über einschlägige Informationen und das Bewusstsein für nachhaltige Entwicklung und eine Lebensweise in Harmonie mit der Natur verfügen",
            ],
            // Measures for climate protection
            [
                "Die Widerstandskraft und die Anpassungsfähigkeit gegenüber klimabedingten Gefahren und Naturkatastrophen in allen Ländern stärken",
                "Klimaschutzmaßnahmen in die nationalen Politiken, Strategien und Planungen einbeziehen",
                "Die Aufklärung und Sensibilisierung sowie die personellen und institutionellen Kapazitäten im Bereich der Abschwächung des Klimawandels, der Klimaanpassung, der Reduzierung der Klimaauswirkungen sowie der Frühwarnung verbessern",
            ],
            // Life underwater
            [
                "Bis 2025 alle Arten der Meeresverschmutzung, insbesondere durch vom Lande ausgehende Tätigkeiten und namentlich Meeresmüll und Nährstoffbelastung, verhüten und erheblich verringern",
                "Den Zugang der handwerklichen Kleinfischer zu den Meeresressourcen und Märkten gewährleisten",
            ],
            // Life on land
            [
                "Finanzielle Mittel aus allen Quellen für die Erhaltung und nachhaltige Nutzung der biologischen Vielfalt und der Ökosysteme aufbringen und deutlich erhöhen",
                "Erhebliche Mittel aus allen Quellen und auf allen Ebenen für die Finanzierung einer nachhaltigen Bewirtschaftung der Wälder aufbringen und den Entwicklungsländern geeignete Anreize für den vermehrten Einsatz dieser Bewirtschaftungsform bieten, namentlich zum Zweck der Walderhaltung und Wiederaufforstung",
            ],
            // Peace, justice and strong institutions
            [
                "Korruption und Bestechung in allen ihren Formen erheblich reduzieren",
                "Leistungsfähige, rechenschaftspflichtige und transparente Institutionen auf allen Ebenen aufbauen",
            ],
            // Partnerships to achieve the goals
            [
                "Die rasche Umsetzung des zoll- und kontingentfreien Marktzugangs auf dauerhafter Grundlage für alle am wenigsten entwickelten Länder im Einklang mit den Beschlüssen der Welthandelsorganisation erreichen, unter anderem indem sichergestellt wird, dass die für Importe aus den am wenigsten entwickelten Ländern geltenden präferenziellen Ursprungsregeln transparent und einfach sind und zur Erleichterung des Marktzugangs beitragen",
                "Die Globale Partnerschaft für nachhaltige Entwicklung ausbauen, ergänzt durch Multi-Akteur-Partnerschaften zur Mobilisierung und zum Austausch von Wissen, Fachkenntnissen, Technologie und finanziellen Ressourcen, um die Erreichung der Ziele für nachhaltige Entwicklung in allen Ländern und insbesondere in den Entwicklungsländern zu unterstützen",
            ],
        ],
        english: [
            // enablement
            [
                "Our organization has a clear and coherent digital strategy.",
                "Employees are rewarded for learning in digitalization.",
                "Business processes and their data are harmonized thoroughly among business units and plants.",
                "Digital use cases are prioritized using portfolio management.",
                "The responsibility and methodology for governing digital initiatives are clearly defined.",
                "Cross-functional team work is highly important to the company.",
                "Dynamic Capabilities are established in order to react rapidly to internal and external changes.",
                "Our employees are made acquainted with digital 85 technologies and are enabled to use them.",
                "Digitalization is an ongoing strategic change 85 project in our entire company that is communicated across channels.",
            ],
            // technology
            // stp
            [
                "Cloud-based business network implemented for direct and indirect e-procurement.",
                "Digital supplier management platform in place foster collaboration",
                "Advanced and with supplier connected contract management tool is implemented",
                "Spend management platform in place supported by analytics",
                "Robotic process automation (RPA) technology in place to automate procure to pay processes.",
                "Artificial Intelligence / Machine-learning / Predictive Analytics to optimize Source-to-Pay processes",
                "Transportation Managemenent System  integrated to ERP to optimize inbound transports",
                "Predictive ETA-Calculation for incoming shipments is implemented",
                "Material flow system connection to ERP/WMS is established",
                "Internet of Things (IoT) infrastructure / platform is established",
                ,
            ],
            // stp
            [
                "Advanced Sales & Operations Planning (S&OP) system in place",
                "Integrated demand sensing / planning system is implemented",
                "Integrated supply planning system is implemented",
                "Advanced production planning system is implemented and integrated to ERP",
                "Manufacturing Execution System (MES) is implemented integrated to ERP",
                "Paperless cockpits are established at shopfloor level",
                "Machine-to-machine communication is established",
                "Internet of Things (IoT) infrastructure / platform is implemented",
                "Automated Guided Vehicle / Driverless material transportation systems",
                "Robotics Process Automation (RPA) to automate plan-to-Produce processes",
                "Artificial Intelligence / Machine-learning / Predictive Analytics to optimize Plan-to-Produce processes",
            ],
            // otc
            [
                "Customer relationship management system implemented and connected to ERP",
                "Chatbots in place to manage customer requests",
                "Robotics Process Automation (RPA) to support source-to-pay processes",
                "Artificial Intelligence / Machine-learning to optimize order-to-cash processes",
                "Warehouse management system implemented and connected to ERP",
                "Hands-free picking (Pick by voice/light, augmented reality)",
                "Internet of Things (IoT) infrastructure / platform",
                "Digital Twin of the distribution warehouse",
                "Transportation management system implemented and connected to ERP",
                "Visibility platform in place for outgoing transports",
            ],
            // SDG
            // no poverty
            [
                "By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance",
                "Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions",
            ],
            // no hunger
            [
                "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round",
                "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality",
            ],
            // health and well-being
            [
                "Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all",
                "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
            ],
            // high quality education
            [
                "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
                "Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all",
            ],
            // gender equality
            [
                "End all forms of discrimination against all women and girls everywhere",
                "Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life",
            ],
            // clean water and sanitation
            [
                "By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally",
                "By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity",
            ],
            // affordable and clean energy
            [
                "By 2030, increase substantially the share of renewable energy in the global energy mix",
                "By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology",
            ],
            // Decent work and economic growth
            [
                "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors",
                "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services",
                "By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value",
                "Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms",
                "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment",
            ],
            // Industry, innovation and infrastructure
            [
                "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
                "Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets",
                "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
            ],
            // Fewer inequalities
            [
                "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status",
                "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard",
            ],
            // Sustainable cities and communities
            [
                "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
                "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
            ],
            // Responsible consumption and production patterns
            [
                "By 2030, achieve the sustainable management and efficient use of natural resources",
                "By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse",
                "Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle",
                "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
            ],
            // Measures for climate protection
            [
                "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
                "Integrate climate change measures into national policies, strategies and planning",
                "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
            ],
            // Life underwater
            [
                "By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution",
                "Provide access for small-scale artisanal fishers to marine resources and markets",
            ],
            // Life on land
            [
                "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems",
                "Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation",
            ],
            // Peace, justice and strong institutions
            [
                "Substantially reduce corruption and bribery in all their forms",
                "Develop effective, accountable and transparent institutions at all levels",
            ],
            // Partnerships to achieve the goals
            [
                "Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access",
                "Enhance the Global Partnership for Sustainable Development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the Sustainable Development Goals in all countries, in particular developing countries",
            ],
        ],
    };

    function decreaseIndex() {
        index -= 1;
        topFunction();
    }
    function increaseIndex() {
        index += 1;
        topFunction();
    }

    function validate(answers: number[][]): boolean {
        for (let topic = 0; topic < answers.length; topic++) {
            for (
                let question = 0;
                question < answers[topic].length;
                question++
            ) {
                if (answers[topic][question] === 0) {
                    return false;
                }
            }
        }
        return true;
    }

    $: validated = validate(answers);
</script>

<div class="mt-8 flex flex-row items-center justify-center">
    <button
        class="bg-primary-500 hover:bg-primary-700 border text-2xl text-white mt-4 p-2 px-3 disabled:opacity-50"
        disabled={index === 0}
        on:click|preventDefault={decreaseIndex}
    >
        {language === "english" ? "BACK" : "ZURÜCK"}
    </button>

    <button
        class="bg-primary-500 hover:bg-primary-700 border text-2xl text-white mt-4 p-2 px-3 disabled:opacity-50"
        disabled={index === 20}
        on:click|preventDefault={increaseIndex}
    >
        {language === "english" ? "NEXT" : "WEITER"}
    </button>
</div>

<div class="m-6">
    {#if index >= 1 && index <= 3}
        <h1 class="text-5xl">Technology Adoption</h1>
    {:else if index > 3}
        <h1 class="text-5xl">SDG</h1>
    {/if}
    <h1 class={index >= 1 ? "text-4xl" : "text-5xl"}>{headers[index]}</h1>

    {#each language === "english" ? questions.english[index] : questions.german[index] as question, questionIndex}
        <Question
            {question}
            {language}
            topicIndex={index}
            {questionIndex}
            bind:answers
        />
    {/each}
</div>

<div class="mt-8 flex flex-row items-center justify-center">
    <button
        class="bg-primary-500 hover:bg-primary-700 border text-2xl text-white mt-4 p-2 px-3 disabled:opacity-50"
        disabled={index === 0}
        on:click|preventDefault={decreaseIndex}
    >
        {language === "english" ? "BACK" : "ZURÜCK"}
    </button>

    <button
        class="bg-primary-500 hover:bg-primary-700 border text-2xl text-white mt-4 p-2 px-3 disabled:opacity-50"
        disabled={index === 20}
        on:click|preventDefault={increaseIndex}
    >
        {language === "english" ? "NEXT" : "WEITER"}
    </button>
</div>

<!-- submit button -->
<div class="mb-8 flex items-center justify-center">
    <button
        class="bg-green-500 hover:bg-green-700 border text-2xl text-white mt-4 p-2 px-3 disabled:opacity-50"
        disabled={!validated}
    >
        {#if validated}
            <Link to="dashboard"
                >{language === "english" ? "EVALUATE" : "AUSWERTEN"}</Link
            >
        {:else}
            {language === "english" ? "EVALUATE" : "AUSWERTEN"}
        {/if}
    </button>
</div>
