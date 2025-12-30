import React, { useState, useEffect, useRef } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import chatImg from '../../images/chat.png';
import frontend from '../../images/frontend.png';
import backend from '../../images/backend.png';
import fullstack from '../../images/fullstack.png';
import lookingjob from '../../images/lookingjob.png';
import it from '../../images/it.png';
import upskills from '../../images/upskills.png';
import './Chat.scss';
import dotted2 from '../../images/dotted2.png';
import arrow from '../../images/arrow.png';
import plus from '../../images/plus.png'

export default function Chat() {
    const navigate = useNavigate();
    const messagesData = [
        { id: 1, text: 'Welcome to the programmer of the future. Let us know your current status?', img: chatImg, options: [{ id: 'job', label: 'Looking For Job', img: lookingjob, nextId: 2 }, { id: 'shift', label: 'IT to Non IT Job Shift', img: it, nextId: 2 }, { id: 'upskill', label: 'Upskill IT Job', img: upskills, nextId: 2 }] },
        { id: 2, text: 'Great! Let me help you choose your learning path', img: chatImg, options: [{ id: 'web', label: 'Web Development', img: lookingjob, nextId: 3 }, { id: 'mobile', label: 'Mobile Development', img: chatImg, nextId: 12 }, { id: 'cyber', label: 'Cybersecurity', img: chatImg, nextId: 21 }] },
        { id: 3, text: 'You chose Web Development. Which path interests you most?', img: chatImg, options: [{ id: 'frontend', label: 'Frontend', img: frontend, nextId: 4 }, { id: 'backend', label: 'Backend', img: backend, nextId: 5 }, { id: 'fullstack', label: 'Full Stack', img: fullstack, nextId: 6 }] },
        { id: 4, text: 'Frontend: What is your experience with HTML/CSS?', img: chatImg, options: [{ id: 'beginner', label: 'Beginner', img: chatImg, nextId: 7 }, { id: 'intermediate', label: 'Intermediate', img: chatImg, nextId: 7 }, { id: 'advanced', label: 'Advanced', img: chatImg, nextId: 7 }] },
        { id: 7, text: 'Which JS framework do you prefer?', img: chatImg, options: [{ id: 'react', label: 'React', img: chatImg, nextId: 8 }, { id: 'vue', label: 'Vue', img: chatImg, nextId: 8 }, { id: 'angular', label: 'Angular', img: chatImg, nextId: 8 }] },
        { id: 8, text: 'Do you use any CSS methodology?', img: chatImg, options: [{ id: 'scss', label: 'SCSS', img: chatImg, nextId: 9 }, { id: 'tailwind', label: 'Tailwind', img: chatImg, nextId: 9 }, { id: 'none', label: 'None', img: chatImg, nextId: 9 }] },
        { id: 9, text: 'Do you handle state management?', img: chatImg, options: [{ id: 'redux', label: 'Redux', img: chatImg, nextId: 10 }, { id: 'context', label: 'Context API', img: chatImg, nextId: 10 }, { id: 'none', label: 'None', img: chatImg, nextId: 10 }] },
        { id: 10, text: 'Frontend path complete! Ready for recommendations?', img: chatImg, options: [{ id: 'next', label: 'NEXT STEPS', img: chatImg, nextId: 'END' }] },
        { id: 5, text: 'Backend: What language do you prefer?', img: chatImg, options: [{ id: 'node', label: 'Node.js', img: chatImg, nextId: 14 }, { id: 'python', label: 'Python', img: chatImg, nextId: 14 }, { id: 'java', label: 'Java', img: chatImg, nextId: 14 }] },
        { id: 14, text: 'Which database do you use?', img: chatImg, options: [{ id: 'sql', label: 'SQL', img: chatImg, nextId: 15 }, { id: 'nosql', label: 'NoSQL', img: chatImg, nextId: 15 }] },
        { id: 15, text: 'Do you handle authentication & security?', img: chatImg, options: [{ id: 'yes', label: 'Yes', img: chatImg, nextId: 16 }, { id: 'no', label: 'No', img: chatImg, nextId: 16 }] },
        { id: 16, text: 'Backend path complete! Ready for recommendations?', img: chatImg, options: [{ id: 'next', label: 'NEXT STEPS', img: chatImg, nextId: 'END' }] },
        { id: 6, text: 'Full Stack: Frontend or Backend focus?', img: chatImg, options: [{ id: 'frontend', label: 'Frontend', img: chatImg, nextId: 4 }, { id: 'backend', label: 'Backend', img: chatImg, nextId: 5 }, { id: 'both', label: 'Balanced', img: chatImg, nextId: 17 }] },
        { id: 17, text: 'Full Stack: Familiar with DevOps basics?', img: chatImg, options: [{ id: 'yes', label: 'Yes', img: chatImg, nextId: 18 }, { id: 'no', label: 'No', img: chatImg, nextId: 18 }] },
        { id: 18, text: 'Full Stack path complete! Ready for recommendations?', img: chatImg, options: [{ id: 'next', label: 'NEXT STEPS', img: chatImg, nextId: 'END' }] },
        { id: 12, text: 'You chose Mobile Development. Which platform do you prefer?', img: chatImg, options: [{ id: 'android', label: 'Android', img: chatImg, nextId: 19 }, { id: 'ios', label: 'iOS', img: chatImg, nextId: 19 }, { id: 'cross', label: 'Cross-platform', img: chatImg, nextId: 19 }] },
        { id: 19, text: 'Mobile: What language do you use?', img: chatImg, options: [{ id: 'java', label: 'Java/Kotlin', img: chatImg, nextId: 20 }, { id: 'swift', label: 'Swift', img: chatImg, nextId: 20 }, { id: 'flutter', label: 'Flutter', img: chatImg, nextId: 20 }] },
        { id: 20, text: 'Mobile path complete! Ready for recommendations?', img: chatImg, options: [{ id: 'next', label: 'NEXT STEPS', img: chatImg, nextId: 'END' }] },
        { id: 21, text: 'You chose Cybersecurity. Which area interests you most?', img: chatImg, options: [{ id: 'network', label: 'Network Security', img: chatImg, nextId: 22 }, { id: 'ethical', label: 'Ethical Hacking', img: chatImg, nextId: 22 }, { id: 'soc', label: 'SOC', img: chatImg, nextId: 22 }] },
        { id: 22, text: 'Cybersecurity: Are you familiar with Networking basics?', img: chatImg, options: [{ id: 'yes', label: 'Yes', img: chatImg, nextId: 23 }, { id: 'no', label: 'No', img: chatImg, nextId: 23 }] },
        { id: 23, text: 'Cybersecurity path complete! Ready for recommendations?', img: chatImg, options: [{ id: 'next', label: 'NEXT STEPS', img: chatImg, nextId: 'END' }] },
    ];

    const [history, setHistory] = useState([]);
    const chatStreamRef = useRef(null);

    useEffect(() => {
        const firstMsg = messagesData.find(m => m.id === 1);
        if (firstMsg) setHistory([{ ...firstMsg, selectedOptionId: null }]);
    }, []);

    useEffect(() => {
        if (chatStreamRef.current) chatStreamRef.current.scrollTo({ top: chatStreamRef.current.scrollHeight, behavior: 'smooth' });
    }, [history]);

    const handleBack = () => {
        if (history.length <= 1) return;
        const newHistory = [...history];
        newHistory.pop();
        const lastMsgIndex = newHistory.length - 1;
        if (lastMsgIndex >= 0) newHistory[lastMsgIndex] = { ...newHistory[lastMsgIndex], selectedOptionId: null };
        setHistory(newHistory);
    };

    const handleOptionClick = (currentMsgId, option) => {
        const currentMsgIndex = history.findIndex(m => m.id === currentMsgId);
        if (currentMsgIndex === -1 || history[currentMsgIndex].selectedOptionId) return;

        const updatedHistory = [...history];
        updatedHistory[currentMsgIndex] = { ...updatedHistory[currentMsgIndex], selectedOptionId: option.id };
        setHistory(updatedHistory);

        if (option.id === 'next') navigate('/courses');
        else if (option.nextId && option.nextId !== 'END') {
            const nextMsg = messagesData.find(m => m.id === option.nextId);
            if (nextMsg) setTimeout(() => setHistory(prev => [...prev, { ...nextMsg, selectedOptionId: null }]), 500);
        }
    };

    return (
        <div className='chat-container'>
            <img className='icons-bg dotted' src={dotted2} alt="dotted2" />
            <img className='icons-bg plus' src={plus} alt="plus" />
            <div className="circle-course"></div>
            <img className='icons-bg arrow' src={arrow} alt="arrow" />
            <div className="chat-header">
                {history.length > 1 && <button className="back-btn" onClick={handleBack}><IoArrowBack /></button>}
                <p className='text-head'>Choose Your <span>Course</span></p>
            </div>
            <div className="chat-stream" ref={chatStreamRef}>
                {history.map((msg, index) => (
                    <div key={`${msg.id}-${index}`} className="chat-message-group fade-in">
                        <div className="bot-message">
                            <div className="avatar"><img src={msg.img} alt="Bot" /></div>
                            <div className="bubble"><p>{msg.text}</p></div>
                        </div>
                        <div className="options-grid">
                            {msg.options.map(opt => {
                                const isSelected = msg.selectedOptionId === opt.id;
                                const isDisabled = msg.selectedOptionId !== null;
                                return (
                                    <div
                                        key={opt.id}
                                        className={`option-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''} ${opt.id === 'next' ? 'next-btn' : ''}`}
                                        onClick={() => handleOptionClick(msg.id, opt)}
                                    >
                                        <div className="chat-option-img"><img src={opt.img} alt={opt.label} /></div>
                                        <div className="card-label">{opt.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}