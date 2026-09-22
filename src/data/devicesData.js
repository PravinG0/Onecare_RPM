import { devices } from './content';

// Mapping categories and sample images for each of the 21 devices
// Users can easily swap images later as requested
export const deviceImages = {
  'FORA IR42 Thermometer': '/assets/devices/device_pulse_oximeter.jpg',
  'FORA TN’G BP': '/assets/devices/device_bp_monitor.jpg',
  'FORA TN’G Scale 550': '/assets/devices/device_digital_scale.jpg',
  'FORA TN’G SpO2': '/assets/devices/device_pulse_oximeter.jpg',
  'Fora 6 Connect': '/assets/devices/device_glucometer.jpg',
  'FORA D40g': '/assets/devices/device_bp_monitor.jpg',
  'Test N’GO Advance Voice': '/assets/devices/device_bp_monitor.jpg',
  'Vtrust Pulse Oximeter': '/assets/devices/device_pulse_oximeter.jpg',
  'TeleRPM BGM Gen 1': '/assets/devices/device_glucometer.jpg',
  'TeleRPM BPM Gen 1': '/assets/devices/device_bp_monitor.jpg',
  'Body Composition Monitor HBF-222T': '/assets/devices/device_digital_scale.jpg',
  'Digital Weight Scale HN-300T2': '/assets/devices/device_digital_scale.jpg',
  'OMRON Automatic BP HEM-7361T': '/assets/devices/device_bp_monitor.jpg',
  'OMRON BPM HEM-7156T': '/assets/devices/device_bp_monitor.jpg',
  'OMRON BPM HEM-7141T1': '/assets/devices/device_bp_monitor.jpg',
  'OMRON BPM Hem7600T': '/assets/devices/device_bp_monitor.jpg',
  'OMRON Wrist BPM HEM-6232T': '/assets/devices/device_bp_monitor.jpg',
  'OMRON HBF-255T': '/assets/devices/device_digital_scale.jpg',
  'PM10 Portable ECG Monitor': '/assets/devices/device_ecg_monitor.jpg',
  'CONTEC PM20 Portable ECG Monitor': '/assets/devices/device_ecg_monitor.jpg',
  'Luckcome EFM-50 Bluetooth Fetal Monitor': '/assets/devices/device_fetal_monitor.jpg',
};

export const deviceCategories = {
  'FORA IR42 Thermometer': 'Infrared Thermometer',
  'FORA TN’G BP': 'Upper-Arm Blood Pressure',
  'FORA TN’G Scale 550': 'Digital Smart Scale',
  'FORA TN’G SpO2': 'Pulse Oximeter',
  'Fora 6 Connect': 'Blood Glucose System',
  'FORA D40g': 'Cellular Blood Pressure',
  'Test N’GO Advance Voice': 'Voice-Guided Blood Pressure',
  'Vtrust Pulse Oximeter': 'Fingertip Pulse Oximeter',
  'TeleRPM BGM Gen 1': 'Connected Glucometer',
  'TeleRPM BPM Gen 1': 'Connected Blood Pressure',
  'Body Composition Monitor HBF-222T': 'Body Composition Scale',
  'Digital Weight Scale HN-300T2': 'Digital Precision Scale',
  'OMRON Automatic BP HEM-7361T': 'Dual-Check Blood Pressure',
  'OMRON BPM HEM-7156T': 'IntelliWrap Blood Pressure',
  'OMRON BPM HEM-7141T1': 'Smart Blood Pressure',
  'OMRON BPM Hem7600T': 'Tubeless Blood Pressure',
  'OMRON Wrist BPM HEM-6232T': 'Wrist Blood Pressure',
  'OMRON HBF-255T': 'Body Fat & Weight Scale',
  'PM10 Portable ECG Monitor': 'Handheld ECG Monitor',
  'CONTEC PM20 Portable ECG Monitor': '6-Lead ECG Monitor',
  'Luckcome EFM-50 Bluetooth Fetal Monitor': 'Wireless Fetal Monitor',
};

export const enrichedDevices = devices.map((d, index) => ({
  ...d,
  id: `device-${index + 1}`,
  image: deviceImages[d.name] || '/assets/devices/device_bp_monitor.jpg',
  category: deviceCategories[d.name] || 'Medical Device',
}));
