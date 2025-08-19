const { NodeSDK } = require('@opentelemetry/sdk-node');
const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');
const { getNodeAutoInstrumentations}  = require('@opentelemetry/auto-instrumentations-node');
const { PeriodicExportingMetricReader, ConsoleMetricExporter } = require('@opentelemetry/sdk-metrics');
const { PrometheusExporter } = require("@opentelemetry/exporter-prometheus");

const prometheusExporter = new PrometheusExporter(
    { port: 9464 },
    () => {console.log("Prometheus metrics at: http://localhost:9464/metrics");}
);
const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  metricReader: prometheusExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();