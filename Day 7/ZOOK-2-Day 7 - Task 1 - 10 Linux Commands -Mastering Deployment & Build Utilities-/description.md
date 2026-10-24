# ZOOK-2: Day 7 - Task 1 - 10 Linux Commands "Mastering Deployment & Build Utilities"

- **Jira:** https://gomathiboyalla4-1792569022463.atlassian.net/browse/ZOOK-2
- **Status:** Done
- **Assignee:** Boyalla Gomathi
- **Issue type:** Task
- **Priority:** Medium
- **Resolution:** Done
- **Reporter:** sasidharana504
- **Created:** 2026-10-21T08:07:30.101Z
- **Updated:** 2026-10-22T04:26:34.906Z
- **Due date:** —
- **Labels:** —
- **Components:** —

## Description

Description:

As part of our deployment and release engineering upskilling, this ticket covers 10 essential command-line tools used heavily inside CI/CD pipelines, automated testing scripts, and artifact packaging.

Create a practice script or run these interactively in your Ubuntu environment to understand how they handle deployments, dependency checks, log capturing, and artifact integrity.

The 10 CI/CD Utility Challenges

1. rsync – The Secure Deployment Sync Engine

- Concept: Copies build artifacts or compiled folders to target servers over SSH while minimizing network bandwidth by transferring only modified files.
- Practice: rsync -avz --delete ./dist/ user@remote-host:/var/www/html/
2. envsubst – The Environment Variable Injector

- Concept: Scans configuration templates (nginx.conf, manifests) and replaces placeholders with active environment or secret variables at runtime.
- Practice: export API_URL="[https://api.staging.internal](https://api.staging.internal)" && envsubst < template.conf > nginx.conf
3. sha256sum – The Integrity Cryptographer

- Concept: Generates and verifies cryptographic checksum hashes to guarantee build binaries have not been tampered with before artifact storage.
- Practice: sha256sum app-release.tar.gz > app-release.sha256 && sha256sum -c app-release.sha256
4. base64 – The Secret Encoder/Decoder

- Concept: Encodes sensitive configuration blobs, keys, or strings into base64 format for safe injection into CI/CD environment variables or secret stores.
- Practice: echo -n "db_password_123" | base64 and decoding it back: echo "<encoded_string>" | base64 --decode
5. jq – The Build Config JSON Parser

- Concept: Programmatically extracts or updates version numbers, metadata, or flags inside JSON configuration files (package.json, etc.) on the fly.
- Practice: jq '.version = "2.0.0"' package.json > temp.json && mv temp.json package.json
6. which – The Environment Dependency Auditor

- Concept: Verifies whether required compilers or tools (docker, node, mvn) exist in the system PATH right at pipeline startup.
- Practice: which docker || { echo "Error: Docker not found!"; exit 1; }
7. tee – The Log Duplicator

- Concept: Captures test suite or build outputs, streams them live to the console, and writes them into a file for pipeline log archiving.
- Practice: echo "Running build step..." | tee build-output.log
8. nc (Netcat) – The Service Readiness Probe

- Concept: Tests TCP port connectivity to check if downstream dependencies like databases or caches are live before running integration tests.
- Practice: nc -zvw3 127.0.0.1 5432
9. gzip – The Artifact Compressor

- Concept: Compresses heavy build artifacts or directory bundles into lightweight .gz archives to optimize storage upload times.
- Practice: tar -cvf - ./build | gzip > deployment-bundle.tar.gz
10. trap – The Pipeline Cleanup Interceptor

- Concept: A built-in shell utility used inside deployment scripts to catch exit codes or failures, ensuring temporary build files or lock files are wiped out.
- Practice: trap 'rm -rf /tmp/temp_build_dir' EXIT

## Attachments

- [Screenshot 2026-10-21 at 3.00.13 PM.png](attachments/Screenshot%202026-10-21%20at%203.00.13%20PM.png)
- [Screenshot 2026-10-21 at 3.00.25 PM.png](attachments/Screenshot%202026-10-21%20at%203.00.25%20PM.png)
- [Screenshot 2026-10-21 at 3.00.33 PM.png](attachments/Screenshot%202026-10-21%20at%203.00.33%20PM.png)
