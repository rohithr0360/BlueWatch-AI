
# BlueWatch.ai: Towards A Future Where Our Waters Aren't Choking On Plastic

## Introduction

Welcome to BlueWatch.ai, an advanced system designed to address the critical issue of plastic pollution in water bodies. BlueWatch.ai combines cutting-edge artificial intelligence with robotic integration to detect, collect, and remove waste plastic from oceans and other water sources.

## Project Overview

Plastic pollution in water bodies poses a significant threat to marine life and ecosystems worldwide. BlueWatch.ai goes beyond traditional AI models by offering seamless integration with robotic hardware, enabling efficient detection and removal of waste plastic. By harnessing the power of technology, BlueWatch.ai aims to mitigate the impact of plastic pollution and safeguard our aquatic environments for future generations.

## Features

- **YOLOv8 Object Detection:** BlueWatch employs YOLOv8, a state-of-the-art object detection algorithm, to identify plastic debris in oceanic environments.
- **React-Based Website:** Our project features a user-friendly React-based website that showcases statistics and highlights the environmental impact of our detection system.
- **Flask Integration:** BlueWatch seamlessly integrates with Flask, allowing users to test the AI model by providing sample videos. The Flask web page redirects users to our model, which accurately locates plastic debris with high precision.
- **Deployment on EC2:** The entire project is deployed using the EC2 hosting platform, ensuring accessibility and scalability.

## Workflow

1. **Data Acquisition**: BlueWatch collects diverse oceanic imagery and video data for model training and testing. This curated dataset serves as the foundation for accurate plastic detection algorithms.
2. **Model Training**: Utilizing the acquired dataset, BlueWatch trains the YOLOv8 algorithm to detect plastic debris with high precision. Through iterative learning, the algorithm refines its capabilities for enhanced performance.
3. **Integration Setup**: BlueWatch configures Flask backend and React frontend for seamless user interaction and data processing. This integration ensures a user-friendly interface and efficient data management.
4. **Deployment on EC2**: BlueWatch deploys on the EC2 platform for scalable and reliable performance. Leveraging EC2's robust infrastructure enables consistent operation and accommodates varying workloads.
5. **Monitoring and Optimization**: BlueWatch implements continuous monitoring to oversee system performance. Through analysis and optimization, BlueWatch enhances efficiency and accuracy in plastic detection, ensuring effective environmental conservation efforts.
   
## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rohithr0360/BlueWatch-AI.git
    ```

2. Install dependencies:

    ```bash
    # Navigate to the project directory
    cd BlueWatch
    
    # Install required Python packages
    pip install -r requirements.txt
    ```

## Deployment

In our AI model, deployment with EC2 (Amazon Elastic Compute Cloud) plays a pivotal role in ensuring scalable and reliable performance. Leveraging the robust infrastructure provided by EC2, we seamlessly deploy BlueWatch for real-time plastic detection and removal in water bodies. With EC2's flexible instance types and features like auto-scaling, our system can adapt to varying workloads, maintaining high availability and efficiency.

## Conclusion

BlueWatch has the potential to revolutionize the way we monitor and address aquatic plastic pollution. By combining AI technology with robotic integration, we can effectively detect, collect, and remove waste plastic, preserving marine life and ecosystems for future generations.

## License

This project is licensed under the [MIT License](LICENSE).


