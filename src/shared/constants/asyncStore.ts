// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Async store
// export const asyncSetStore = async (key: string, value: any) => {
//   try {
//     await AsyncStorage.setItem(key, JSON.stringify(value));
//     console.log(`Async storage set successfully for key: ${key}`);
//   } catch (error) {
//     console.error(`Error setting async storage for key ${key}:`, error);
//   }
// };

// // Async get store
// export const asyncGetStore = async (key: string): Promise<any | null> => {
//   try {
//     const result = await AsyncStorage.getItem(key);
//     return result ? JSON.parse(result) : null;
//   } catch (error) {
//     console.error(`Error getting async storage for key ${key}:`, error);
//     return null;
//   }
// };

// // Async remove single store
// export const asyncRemoveSingleStore = async (key: string) => {
//   try {
//     await AsyncStorage.removeItem(key);
//     console.log(`Async storage removed successfully for key: ${key}`);
//   } catch (error) {
//     console.error(`Error removing async storage for key ${key}:`, error);
//   }
// };

// // Async clear
// export const asyncClear = async () => {
//   try {
//     await AsyncStorage.clear();
//     console.log('Async storage cleared successfully');
//   } catch (error) {
//     console.error('Error clearing async storage:', error);
//   }
// };
