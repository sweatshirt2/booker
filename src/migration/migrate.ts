import { appDataSource } from "../utils/data-source";

appDataSource.initialize();
if (appDataSource.isInitialized) {
  appDataSource.synchronize();
}
