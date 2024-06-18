.PHONY: *

# Build the Spin application
build:
	spin build -f app/spin.toml

# Stop all containers
stop_all:
	docker compose down

# Start all containers and Spin w/ runtime-config and OTEL enabled
start_all:
	docker compose up --detach
	OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318 spin up --from app/spin.toml --runtime-config-file runtime-config.toml
