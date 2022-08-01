## Getting Started

### Prerequisites

```bash
npm i npm@latest -g
npm install -g @graphprotocol/graph-cli
```

### Installation

```bash
graph init --studio nft-marketplace
$ mv nft-marketplace/* ./
```

 https://thegraph.com/studio/subgraph/nft-marketplace/   

# Usage

## Useful commands

```shell
# Make typescript typings in /generated
$ graph codegen
```

# AUTH & DEPLOY
```shell
# AUTHENTICATE IN CLI
$ graph auth --studio ee11da42c6254055fedea8d6f6dd2a80
Deploy key set for https://api.studio.thegraph.com/deploy/

# BUILD SUBGRAPH
$ graph codegen && graph build
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: NftMarketplace => build\NftMarketplace\NftMarketplace.wasm
✔ Compile subgraph
  Copy schema file build\schema.graphql
  Write subgraph file build\NftMarketplace\abis\NftMarketplace.json
  Write subgraph manifest build\subgraph.yaml
✔ Write compiled subgraph to build\

# DEPLOY SUBGRAPH
$ graph deploy --studio nft-marketplace
√ Version Label (e.g. v0.0.1) · v0.0.1
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
  Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
  Skip migration: Bump manifest specVersion from 0.0.2 to 0.0.4
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: NftMarketplace => build\NftMarketplace\NftMarketplace.wasm
  Add file to IPFS build\NftMarketplace\NftMarketplace.wasm
                .. QmZL48cLRurkCLeL5STpw87NSsjCpEfaPnkCkC7NwXP4Po
✔ Upload subgraph to IPFS

Build completed: QmQ4ZspdSb2LQdXq9YWKt51j1wVRdi9Vj9aKgLButn2NYq

Deployed to https://thegraph.com/studio/subgraph/nft-marketplace

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/31398/nft-marketplace/v0.0.1
```
