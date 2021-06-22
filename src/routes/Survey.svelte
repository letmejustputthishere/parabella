<script lang="ts">
    import { Link } from "svelte-routing";
    import Question from "../components/Question.svelte";

    export let language: string;
    export let answers: number[][];

    window.document.body.classList.toggle("survey");

    let index = 0;

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
                "Infrastruktur / Plattform für das Internet der Dinge (IoT).",
                "Digitaler Zwilling des Auslieferungslagers.",
                "Transportmanagementsystem verbunden zum ERP-System. ",
                "Plattform für ausgehende Transporte.",
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
        ],
    };

    function decreaseIndex() {
        console.log("decrease");

        index -= 1;
    }
    function increaseIndex() {
        index += 1;
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

{#each language === "english" ? questions.english[index] : questions.german[index] as question, questionIndex}
    <Question
        {question}
        {language}
        topicIndex={index}
        {questionIndex}
        bind:answers
    />
{/each}

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
        disabled={index === 3}
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
